import React from "react";
import { getPostBySlug, getAllPosts } from "../../../lib/posts";
import { notFound } from "next/navigation";
import { marked } from "marked";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="blog-post-section min-h-screen pt-20 pb-20 flex items-start bg-grainy">
      <div className="container mx-auto px-8 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Blog Content */}
        <div className="md:col-span-2 bg-white/50 p-8 rounded-xl border-2 border-zinc-400/40 bg-clip-border">
          <p className="text-base text-gray-500 mb-6">{post.metadata.date}</p>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: marked(post.content) }}
          ></div>
        </div>

        {/* Sidebar with Other Blog Entries */}
        <div className="bg-white/50 p-8 rounded-xl border-2 border-zinc-400/40 bg-clip-border">
          <h2 className="text-lg font-bold text-[#194f90] mb-4">Other Posts</h2>
          <ul className="space-y-4 text-base">
            {getAllPosts()
              .filter((otherPost) => otherPost.slug !== params.slug) // Exclude the current post
              .map((otherPost) => (
                <li key={otherPost.slug}>
                  <a
                    href={`/blog/${otherPost.slug}`}
                    className="text-blue-500 hover:underline"
                  >
                    {otherPost.metadata.title}
                  </a>
                  <p className="text-sm text-gray-500">{otherPost.metadata.date}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
