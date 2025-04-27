import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export default async function BlogPage() {
  const posts = getAllPosts(); // Fetch posts directly in the Server Component

  return (
    <section className="blog-page-section min-h-screen pt-20 pb-20 bg-grainy">
      <div className="container mx-auto px-8 w-full max-w-7xl">
        <h1 className="text-3xl font-bold text-[#194f90] mb-8">ERCOT - PUCT - Texas Legislature Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
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
      </div>
    </section>
  );
}