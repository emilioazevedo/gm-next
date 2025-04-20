import React from "react";
import { getAllPosts, Post } from "../../lib/posts"; // Import the Post type

export default function BlogPage() {
  const posts: Post[] = getAllPosts(); // Explicitly type the posts variable

  console.log("Posts fetched for blog page:", posts); // Debug log

  return (
    <section className="blog-page-section min-h-screen pt-20 pb-20 bg-grainy">
      <div className="container mx-auto px-8 w-full max-w-7xl">
        <h1 className="text-3xl font-bold text-[#194f90] mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Changed to grid layout */}
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-white/50 p-6 rounded-xl border-2 border-zinc-400/40 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-lg font-semibold text-[#194f90]">
                <a href={`/blog/${post.slug}`}>{post.metadata.title}</a>
              </h2>
              <p className="text-sm text-gray-500">{post.metadata.date}</p>
              <p className="text-lg text-gray-700">{post.metadata.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}