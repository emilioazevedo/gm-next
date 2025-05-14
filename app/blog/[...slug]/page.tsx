import Link from "next/link";
import { getAllPosts } from "../../../lib/posts";

type tParams = Promise<{ slug?: string[] }>;

export default async function BlogPage({ params }: { params: tParams }) {
  const { slug } = await params;
  // If your route is /blog/page/2, then slug = ['page', '2']
  const pageFromSlug = slug && slug[0] === "page" && slug[1] ? Number(slug[1]) : 1;

  const posts = getAllPosts();
  const postsPerPage = 10;
  const currentPage = pageFromSlug;
  const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage));

  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <section className="blog-page-section min-h-screen pt-20 pb-20 bg-grainy">
      <div className="container mx-auto px-8 w-full max-w-7xl">
        <h1 className="text-3xl font-bold text-[#194f90] mb-8">ERCOT - PUCT - Texas Legislature Blog</h1>
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center text-sm items-center mt-8 space-x-4">
            {currentPage > 1 && (
              <Link
                href={currentPage - 1 === 1 ? `/blog` : `/blog/page/${currentPage - 1}`}
                className="px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition"
              >
                Previous
              </Link>
            )}
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
              <Link
                href={`/blog/page/${currentPage + 1}`}
                className="px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition"
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
