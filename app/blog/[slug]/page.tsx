import React from "react";
import { getPostBySlug, getAllPosts } from "../../../lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import { FaShareAlt } from "react-icons/fa"; // Import the share icon

interface PageProps {
  params: Promise<{ slug: string }>; // Ensure params is treated as a Promise
}

// Generate metadata for the page dynamically
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params; // Await the params object
  const { slug } = resolvedParams;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.excerpt || "Read this blog post on GridMonitor.",
  };
}

// Fetch the blog post data on the server side
export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params; // Await the params object
  const { slug } = resolvedParams;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = getAllPosts().filter((otherPost) => otherPost.slug !== slug);

  return (
    <section className="blog-post-section min-h-screen pt-20 pb-20 bg-grainy">
      <div className="container mx-auto px-8 w-full max-w-8xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Blog Content */}
        <div className="md:col-span-2 bg-white/100 p-8 rounded-ms bg-clip-border">
          <h1 className="text-2xl font-bold text-[#194f90] mb-4">{post.metadata.title}</h1>
          <div className="flex items-center justify-between mb-6">
            <p className="text-base text-gray-500">{post.metadata.date}</p>
            <div className="flex items-center">
              <FaShareAlt className="text-blue-500 text-xl mr-2" />
              <span className="text-sm text-gray-600">Share</span>
            </div>
          </div>
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: marked(post.content) }}
          ></div>
        </div>

        {/* Sidebar with Other Blog Entries */}
        <div className="bg-white/20 p-8 rounded-sm border-2 bg-clip-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#194f90]">Other Posts</h2>
            <Link
              href="/blog"
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              Back
            </Link>
          </div>
          <ul className="space-y-4 text-base">
            {otherPosts.map((otherPost) => (
              <li key={otherPost.slug}>
                <Link
                  href={`/blog/${otherPost.slug}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {otherPost.metadata.title}
                </Link>
                <p className="text-sm text-gray-500">{otherPost.metadata.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Useful Resources Section */}
      <div className="container mx-auto px-8 mt-12 flex justify-center">
        <MyComponent />
      </div>
    </section>
  );
}

// Generate static params for build time
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Useful Resources Component
function MyComponent() {
  return (
    <div className="text-sm p-6 text-center">
      <h2 className="text-lg mb-4 ">Useful Resources:</h2>
      
        <Link href="https://gridmonitor.com" className="text-blue-500 hover:underline">
          GridMonitor
        </Link>{" "}
        - .
     
        <Link href="https://ercot.com" className="text-blue-500 hover:underline">
          ERCOT
        </Link>{" "}
        -
      
        <Link href="https://www.puc.texas.gov/" className="text-blue-500 hover:underline">
          Texas PUC
        </Link>{" "}
        - 
     
        <Link href="https://capitol.texas.gov/" className="text-blue-500 hover:underline">
          Texas Legislature
        </Link>{" "}
        
      
    </div>
  );
}
