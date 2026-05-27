import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getLabPost, type LabBlock } from "@/lib/labs";

export const dynamic = "force-dynamic";

type LabDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

function renderBlock(block: LabBlock, index: number) {
  switch (block.type) {
    case "heading":
      return block.level === 2 ? (
        <h2 key={index} className="mt-10 text-3xl font-semibold leading-tight">
          {block.text}
        </h2>
      ) : (
        <h3 key={index} className="mt-8 text-2xl font-semibold leading-tight">
          {block.text}
        </h3>
      );
    case "bulleted":
      return (
        <li key={index} className="ml-6 list-disc text-lg leading-8 text-[#3d4037]">
          {block.text}
        </li>
      );
    case "numbered":
      return (
        <li key={index} className="ml-6 list-decimal text-lg leading-8 text-[#3d4037]">
          {block.text}
        </li>
      );
    case "quote":
      return (
        <blockquote key={index} className="my-7 border-l-4 border-[#4f6f64] bg-[#f4f6f1] px-5 py-4 text-lg leading-8 text-[#55584c]">
          {block.text}
        </blockquote>
      );
    case "code":
      return (
        <pre key={index} className="my-7 overflow-auto rounded-lg bg-[#171813] p-5 text-sm leading-7 text-[#eff3e8]">
          <code>{block.text}</code>
        </pre>
      );
    default:
      return (
        <p key={index} className="text-lg leading-8 text-[#3d4037]">
          {block.text}
        </p>
      );
  }
}

export default async function LabDetailPage({ params }: LabDetailProps) {
  const { slug } = await params;
  const post = await getLabPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#181914]">
      <header className="border-b border-[#d8d8cc] bg-[#f7f7f2]/92 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-5">
          <Link href="/labs" className="inline-flex items-center gap-2 text-sm font-semibold text-[#55584c] hover:text-[#181914]">
            <ArrowLeft size={16} />
            Labs
          </Link>
          <Link href="/" className="text-sm font-semibold text-[#55584c] hover:text-[#181914]">
            Portfolio
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-14">
        <div className="rounded-lg border border-[#d8d8cc] bg-white p-6 shadow-sm md:p-10">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#f1eee1] px-3 py-1 text-xs font-semibold text-[#6c4d24]">
              {post.category}
            </span>
            <span className="text-sm text-[#696c5f]">{post.date}</span>
            <span className="text-sm text-[#696c5f]">{post.readingTime}</span>
          </div>

          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-[#55584c]">{post.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-md border border-[#d8d8cc] px-2 py-1 text-xs font-medium text-[#55584c]">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 space-y-5">{post.blocks?.map(renderBlock)}</div>
        </div>
      </article>
    </main>
  );
}
