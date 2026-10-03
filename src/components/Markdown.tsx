import Link from "next/link";
import type { ReactNode } from "react";

/** Small markdown subset (headings, lists, ordered lists, tables, bold, links, paragraphs) for academic-year pages. */
function inline(t: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let rest = t;
  let k = 0;
  const rx = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/;
  while (rx.test(rest)) {
    const m = rest.match(rx)!;
    const before = rest.slice(0, m.index);
    if (before) parts.push(before);
    if (m[0].startsWith("**")) parts.push(<strong key={k++}>{m[0].slice(2, -2)}</strong>);
    else {
      const lm = m[0].match(/\[([^\]]+)\]\(([^)]+)\)/)!;
      const ext = /^https?:/.test(lm[2]);
      parts.push(
        ext ? (
          <a key={k++} href={lm[2]} rel="noopener" className="text-teal-deep underline font-semibold">{lm[1]}</a>
        ) : (
          <Link key={k++} href={lm[2]} className="text-teal-deep underline font-semibold">{lm[1]}</Link>
        )
      );
    }
    rest = rest.slice(m.index! + m[0].length);
  }
  if (rest) parts.push(rest);
  return parts;
}

const cells = (row: string) => row.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

export function Markdown({ md }: { md: string }) {
  const lines = md.split("\n");
  const out: ReactNode[] = [];
  let list: string[] = [];
  let ordered = false;
  let key = 0;
  const flush = () => {
    if (!list.length) return;
    const items = list.map((li, i) => <li key={i}>{inline(li)}</li>);
    out.push(ordered ? <ol key={key++}>{items}</ol> : <ul key={key++}>{items}</ul>);
    list = [];
  };
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (!t) { flush(); continue; }
    if (t.startsWith("|") && lines[i + 1]?.trim().match(/^\|[\s:|-]+\|$/)) {
      flush();
      const head = cells(t);
      const body: string[][] = [];
      let j = i + 2;
      while (j < lines.length && lines[j].trim().startsWith("|")) body.push(cells(lines[j++].trim()));
      out.push(
        <div key={key++} className="overflow-x-auto mb-6">
          <table>
            <thead><tr>{head.map((h, hi) => <th key={hi}>{inline(h)}</th>)}</tr></thead>
            <tbody>{body.map((r, ri) => <tr key={ri}>{r.map((c, ci) => <td key={ci}>{inline(c)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
      i = j - 1;
      continue;
    }
    if (t.startsWith("## ")) { flush(); out.push(<h2 key={key++}>{inline(t.slice(3))}</h2>); }
    else if (t.startsWith("### ")) { flush(); out.push(<h3 key={key++}>{inline(t.slice(4))}</h3>); }
    else if (/^[-*] /.test(t)) { if (ordered) flush(); ordered = false; list.push(t.slice(2)); }
    else if (/^\d+\. /.test(t)) { if (!ordered) flush(); ordered = true; list.push(t.replace(/^\d+\. /, "")); }
    else { flush(); out.push(<p key={key++}>{inline(t)}</p>); }
  }
  flush();
  return <>{out}</>;
}
