import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, Search } from "lucide-react";
import { getLabPosts } from "@/lib/labs";

export const dynamic = "force-dynamic";

export default async function LabsPage() {
  const posts = await getLabPosts();
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#181914]">
      <header className="border-b border-[#d8d8cc] bg-[#f7f7f2]/92 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#55584c] hover:text-[#181914]">
            <ArrowLeft size={16} />
            Portfolio
          </Link>
          <nav className="flex flex-wrap gap-3 text-sm font-semibold text-[#55584c]">
            {categories.map((category) => (
              <a key={category} href={`#${category.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-[#181914]">
                {category}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="border-b border-[#d8d8cc]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[1.25fr_0.75fr] md:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8d8cc] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#4f6f64]">
              <BookOpen size={14} />
              Naufal Labs
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Technical notes for infrastructure, security, cloud, and AI automation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#55584c]">
              A polished lab notebook powered by Notion as the writing space and Vercel as the public website.
            </p>
          </div>
          <div className="rounded-lg border border-[#d8d8cc] bg-white p-5 shadow-sm">
            <Search className="mb-5 text-[#4f6f64]" size={24} />
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#a6542f]">CMS Mode</p>
            <p className="mt-3 text-sm leading-6 text-[#55584c]">
              Publish notes from Notion by setting `NOTION_TOKEN` and `NOTION_DATABASE_ID` in Vercel.
              Until then, this page uses local sample notes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              id={post.category.toLowerCase().replace(/\s+/g, "-")}
              className="flex min-h-[300px] flex-col rounded-lg border border-[#d8d8cc] bg-white p-5 shadow-sm"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="rounded-full bg-[#f1eee1] px-3 py-1 text-xs font-semibold text-[#6c4d24]">
                  {post.category}
                </span>
                <span className="text-xs font-medium text-[#696c5f]">{post.readingTime}</span>
              </div>
              <h2 className="text-2xl font-semibold leading-8">{post.title}</h2>
              <p className="mt-4 text-sm leading-6 text-[#55584c]">{post.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-[#d8d8cc] px-2 py-1 text-xs font-medium text-[#55584c]">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/labs/${post.slug}`}
                className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#4f6f64]"
              >
                Read note
                <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
