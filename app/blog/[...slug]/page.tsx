// Only /blog, /blog/2, /blog/3, /blog/[post-slug] will work with this file.

export const dynamic = "force-dynamic";

import Link from "next/link";
import { getAllPosts } from "../../../lib/posts";
import { redirect } from "next/navigation";
import React from "react";
import { marked } from "marked"; // You need to install 'marked' or use your preferred markdown renderer

// Import the ShareButton directly (do NOT use dynamic)
import ShareButton from "./ShareButton";

// Useful Resources Component
function UsefulResources() {
  return (
    <div className="text-sm p-6 text-center">
      <h2 className="text-lg mb-4">Useful Resources:</h2>
      <div className="flex-auto gap-2 items-center">
        <Link href="https://gridmonitor.com" className="text-blue-500 hover:underline">
          GridMonitor
        </Link>
        <Link href="https://ercot.com" className="text-blue-500 hover:underline">
          ERCOT
        </Link>
        <Link href="https://www.puc.texas.gov/" className="text-blue-500 hover:underline">
          Texas PUC
        </Link>
        <Link href="https://capitol.texas.gov/" className="text-blue-500 hover:underline">
          Texas Legislature
        </Link>
      </div>
    </div>
  );
}

type tParams = Promise<{ slug?: string[] }>;

export default async function BlogPage({ params }: { params: tParams }) {
  const { slug } = await params;

  // If the slug is a single string and not a page number, treat as a post slug
  if (Array.isArray(slug) && slug.length === 1 && !/^\d+$/.test(slug[0])) {
    const posts = getAllPosts();
    const post = posts.find((p) => p.slug === slug[0]);
    if (!post) {
      return <h1 className="text-2xl text-center mt-20">Post not found</h1>;
    }
    return (
      <section className="blog-page-section min-h-screen pt-20 pb-20 bg-grainy">
        <div className="container mx-auto px-8 w-full max-w-7xl flex flex-col md:flex-row gap-8">
          {/* Main post content */}
          <div className="flex-1 max-w-3xl">
            <h1 className="text-4xl font-bold text-[#194f90] mb-6">{post.metadata.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>{post.metadata.date}</span>
              {/* Use the client ShareButton */}
              <ShareButton title={post.metadata.title} />
            </div>
            <div
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: marked(post.content) }}
            />
            {/* Useful Resources at the bottom of the post */}
            <UsefulResources />
          </div>
          {/* Right column with Back button and blog list */}
          <div className="w-full p-4 md:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <Link
                href="/blog"
                className="block w-[60%] text-center text-sm px-0 py-2 mb-4 bg-gray-200 rounded-md hover:bg-gray-300 transition font-medium"
              >
                ← Back to Blog
              </Link>
              {/* Blog list */}
              <div className="mt-4">
                <h3 className="text-base font-semibold mb-2">All Blog Posts</h3>
                <ul className="space-y-1 text-sm">
                  {posts.map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={`/blog/${b.slug}`}
                        className={`hover:underline ${b.slug === post.slug ? "font-bold text-[#194f90]" : "text-gray-700"}`}
                      >
                        {b.metadata.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Treat undefined, [] or [''] as page 1
  let currentPage = 1;
  if (!slug || (Array.isArray(slug) && slug.length === 0) || (Array.isArray(slug) && slug.length === 1 && slug[0] === "")) {
    currentPage = 1;
  } else if (Array.isArray(slug) && slug.length === 1 && /^\d+$/.test(slug[0])) {
    currentPage = Number(slug[0]);
  }

  const posts = getAllPosts();
  const postsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage));
  currentPage = Math.min(Math.max(1, currentPage), totalPages);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  // Redirect /blog/1 to /blog for canonical URL
  if (currentPage === 1 && Array.isArray(slug) && slug[0] === "1") {
    redirect("/blog");
  }

  return (
    <section className="blog-page-section min-h-screen pt-20 pb-20 bg-grainy">
      <div className="container mx-auto px-8 w-full max-w-7xl">
        <h1 className="text-3xl font-bold text-[#194f90] mb-8">
          ERCOT - PUCT - Texas Legislature Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paginatedPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white/80 p-6 rounded-xl border-sky-200 bg-gradient-to-b from-slate-100 to-transparent shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-lg font-semibold text-[#194f90]">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-700 transition">
                  {post.metadata.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 mb-3">{post.metadata.date}</p>
              <p className="text-base text-gray-700">{post.metadata.excerpt}</p>
              <div className="mt-4 text-base">
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center text-sm items-center mt-8 space-x-4">
            {currentPage > 1 && (
              <Link
                href={currentPage - 1 === 1 ? `/blog` : `/blog/${currentPage - 1}`}
                className="px-4 py-2 text-sm rounded-md transition bg-gray-200 hover:bg-gray-300"
              >
                Previous
              </Link>
            )}
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
              <Link
                href={`/blog/${currentPage + 1}`}
                className="px-4 py-2 text-sm rounded-md transition bg-gray-200 hover:bg-gray-300"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
