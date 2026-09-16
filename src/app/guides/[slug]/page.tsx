import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts, getPost } from "@/lib/posts";
import { site } from "@/lib/site";
import { ArticleJsonLd, AuthorJsonLd, BreadcrumbJsonLd, ServiceAreaJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt };
}

// tiny safe markdown subset: headings, lists, bold, links, paragraphs
function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  let key = 0;
  const inline = (t: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    let rest = t;
    let k = 0;
    const rx = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/;
    while (rx.test(rest)) {
      const m = rest.match(rx)!;
      const [full] = m;
      const before = rest.slice(0, m.index);
      if (before) parts.push(before);
      if (full.startsWith("**")) {
        parts.push(<strong key={k++}>{full.slice(2, -2)}</strong>);
      } else {
        const lm = full.match(/\[([^\]]+)\]\(([^)]+)\)/)!;
        parts.push(<Link key={k++} href={lm[2]} className="text-teal-deep underline font-semibold">{lm[1]}</Link>);
      }
      rest = rest.slice(m.index! + full.length);
    }
    if (rest) parts.push(rest);
    return parts;
  };
  const flushList = () => {
    if (list.length) {
      out.push(<ul key={key++}>{list.map((li) => <li key={li}>{inline(li)}</li>)}</ul>);
      list = [];
    }
  };
  const cells = (row: string) =>
    row
      .replace(/^\||\|$/g, "")
      .split("|")
      .map((c) => c.trim());
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (!t) { flushList(); continue; }
    // markdown table: header row followed by a |---|--- separator
    if (t.startsWith("|") && lines[i + 1]?.trim().match(/^\|[\s:|-]+\|$/)) {
      flushList();
      const head = cells(t);
      const body: string[][] = [];
      let j = i + 2;
      while (j < lines.length && lines[j].trim().startsWith("|")) {
        body.push(cells(lines[j].trim()));
        j++;
      }
      out.push(
        <div key={key++} className="overflow-x-auto mb-6">
          <table>
            <thead>
              <tr>{head.map((h) => <th key={h}>{inline(h)}</th>)}</tr>
            </thead>
            <tbody>
              {body.map((r, ri) => (
                <tr key={ri}>{r.map((c, ci) => <td key={ci}>{inline(c)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      i = j - 1;
      continue;
    }
    if (t.startsWith("## ")) { flushList(); out.push(<h2 key={key++}>{inline(t.slice(3))}</h2>); }
    else if (t.startsWith("### ")) { flushList(); out.push(<h3 key={key++}>{inline(t.slice(4))}</h3>); }
    else if (/^[-*] /.test(t)) { list.push(t.slice(2)); }
    else { flushList(); out.push(<p key={key++}>{inline(t)}</p>); }
  }
  flushList();
  return out;
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const related = getPosts().filter((x) => x.slug !== slug).slice(0, 4);
  const postUrl = `${site.url}/guides/${p.slug}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <ArticleJsonLd title={p.title} description={p.excerpt} url={postUrl} date={p.date} author={p.author} />
      <AuthorJsonLd name={p.author} />
      <ServiceAreaJsonLd />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: site.url },
        { name: "Guides", url: `${site.url}/guides` },
        { name: p.title, url: postUrl },
      ]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> ›{" "}
        <Link href="/guides" className="text-teal hover:underline">Guides</Link> › {p.title}
      </nav>
      <p className="text-sm font-bold text-teal uppercase tracking-wide mb-1">
        {p.category} · {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>
      <h1 className="text-4xl font-semibold text-navy mb-3 leading-tight">{p.title}</h1>
      <p className="text-sm text-mist mb-6">
        Written by <Link href="/about" className="text-teal-deep underline font-semibold">{p.author}</Link> ·{" "}
        {site.parentBrand}
      </p>
      <div className="prose-mc text-lg">{renderMarkdown(p.content)}</div>

      <div className="bg-ice border-2 border-teal rounded-2xl p-7 my-10 text-center">
        <p className="font-bold text-navy text-xl mb-3">Want this done for you?</p>
        <a href={site.phoneHref} className="inline-flex bg-teal text-white font-bold text-lg px-8 py-4 rounded-lg min-h-12 items-center">
          Call {site.phone}
        </a>
        <p className="text-mist mt-3">
          {site.hours} · $299 first mattress, any size ·{" "}
          <Link href="/pricing" className="text-teal-deep underline font-semibold">all pricing</Link>
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-navy mb-4">More guides</h2>
      <ul className="space-y-2 text-lg">
        {related.map((r) => (
          <li key={r.slug}>
            📖{" "}
            <Link href={`/guides/${r.slug}`} className="text-teal-deep underline font-semibold">{r.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}