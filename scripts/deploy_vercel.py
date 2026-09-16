#!/usr/bin/env python3
"""Deploy this repo to Vercel via the deployments API (files mode).

Used when the project cannot be Git-linked (Vercel GitHub login connection not
granted for the repo). Binaries MUST be sent as base64 or the remote build
fails with an invalid-signature style error.

Usage:  VERCEL_TOKEN=... python scripts/deploy_vercel.py
        VERCEL_TOKEN=... python scripts/deploy_vercel.py --team team_xxx --project lincoln-mattress-cleaning
"""
import os
import sys
import json
import time
import base64
import urllib.request
import urllib.error

PROJECT = "lincoln-mattress-cleaning"
TEAM = os.environ.get("VERCEL_TEAM_ID", "team_9xj79qItTvl4AmkbSIOevOd4")
INCLUDE_DIRS = ["src", "public", "content"]
INCLUDE_FILES = [
    "package.json",
    "package-lock.json",
    "next.config.ts",
    "tsconfig.json",
    "postcss.config.mjs",
    "eslint.config.mjs",
    "README.md",
    ".env.example",
]


def api(method, path, token, payload=None):
    url = f"https://api.vercel.com{path}"
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(
        url,
        data=data,
        headers={"Authorization": "Bearer " + token, "Content-Type": "application/json"},
        method=method,
    )
    try:
        with urllib.request.urlopen(req, timeout=180) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="ignore")
        raise SystemExit(f"HTTP {e.code} on {method} {path}\n{body[:800]}")


def collect_files():
    files = []
    for d in INCLUDE_DIRS:
        for dirpath, _, names in os.walk(d):
            for n in names:
                p = os.path.join(dirpath, n)
                rel = os.path.relpath(p, ".").replace("\\", "/")
                with open(p, "rb") as f:
                    raw = f.read()
                entry = {"file": rel}
                try:
                    entry["data"] = raw.decode("utf-8")
                except UnicodeDecodeError:
                    entry["encoding"] = "base64"
                    entry["data"] = base64.b64encode(raw).decode()
                files.append(entry)
    for n in INCLUDE_FILES:
        if not os.path.exists(n):
            continue
        with open(n, "rb") as f:
            raw = f.read()
        entry = {"file": n}
        try:
            entry["data"] = raw.decode("utf-8")
        except UnicodeDecodeError:
            entry["encoding"] = "base64"
            entry["data"] = base64.b64encode(raw).decode()
        files.append(entry)
    return files


def main():
    token = os.environ.get("VERCEL_TOKEN")
    if not token:
        raise SystemExit("VERCEL_TOKEN is not set")
    project, team = PROJECT, TEAM
    args = sys.argv[1:]
    for i, a in enumerate(args):
        if a == "--project":
            project = args[i + 1]
        if a == "--team":
            team = args[i + 1]

    files = collect_files()
    print(f"files: {len(files)}", flush=True)

    dep = api(
        "POST",
        f"/v13/deployments?teamId={team}&forceNew=1&skipAutoDetectionConfirmation=1",
        token,
        {
            "name": project,
            "files": files,
            "target": "production",
            "projectSettings": {"framework": "nextjs"},
        },
    )
    did = dep["id"]
    url = dep.get("url")
    print(f"deployment {did} -> {url}", flush=True)

    for _ in range(120):
        d = api("GET", f"/v13/deployments/{did}?teamId={team}", token)
        state = d.get("readyState")
        print(f"  {state} {d.get('url')}", flush=True)
        if state in ("READY", "ERROR", "CANCELED"):
            if state != "READY":
                ev = api("GET", f"/v2/deployments/{did}/events?teamId={team}&builds=1&limit=60", token)
                for e in ev if isinstance(ev, list) else []:
                    if e.get("type") in ("error", "stderr") or e.get("text", "").lower().find("error") >= 0:
                        print("   !", str(e.get("text") or e.get("payload"))[:400], flush=True)
            print(f"FINAL {state} https://{d.get('url')} sha={ (d.get('meta') or {}).get('githubCommitSha','-') }", flush=True)
            break
        time.sleep(5)


if __name__ == "__main__":
    main()