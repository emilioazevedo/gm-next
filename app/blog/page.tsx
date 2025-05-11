import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export default async function Page({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const posts = getAllPosts();
  const searchQuery = typeof searchParams?.search === "string" ? searchParams.search : "";

  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? posts.filter((post) => {
        const title = (post.metadata?.title || "").toLowerCase();
        const excerpt = (post.metadata?.excerpt || "").toLowerCase();
        const content = (post.content || "").toLowerCase();
        const query = searchQuery.toLowerCase();

        return title.includes(query) || excerpt.includes(query) || content.includes(query);
      })
    : posts;

  // Sort posts by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(); // Fixed arithmetic operation
  });

  // Pagination logic
  const postsPerPage = 6; // Number of posts per page
  const currentPage = Number(typeof searchParams?.page === "string" ? searchParams.page : "1");
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = sortedPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  // Generate pagination links
  const paginationLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationLinks.push(i);
  }

  return (
    <section className="blog-page-section min-h-screen pt-20 pb-20 bg-grainy">
      <div className="container mx-auto px-8 w-full max-w-7xl">
        <h1 className="text-3xl font-bold text-[#194f90] mb-8">ERCOT - PUCT - Texas Legislature Blog</h1>

        {/* Search Form */}
        <form className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              name="search"
              defaultValue={searchQuery}
              placeholder="Search blog posts..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#194f90] text-white rounded-md hover:bg-blue-700 transition"
            >
              Search
            </button>
            {searchQuery && (
              <Link
                href="/blog"
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
              >
                Clear
              </Link>
            )}
          </div>
        </form>

        {/* Search Results Count */}
        {searchQuery && (
          <p className="mb-6 text-gray-600">
            Found {filteredPosts.length} result{filteredPosts.length !== 1 ? "s" : ""} for "{searchQuery}"
          </p>
        )}

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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-12">
            {currentPage > 1 && (
              <Link
                href={`/blog?page=${currentPage - 1}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ""}`}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
              >
                Previous
              </Link>
            )}

            {paginationLinks.map((page) => (
              <Link
                key={page}
                href={`/blog?page=${page}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ""}`}
                className={`px-4 py-2 rounded-md ${
                  currentPage === page
                    ? "bg-[#194f90] text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                } transition`}
              >
                {page}
              </Link>
            ))}

            {currentPage < totalPages && (
              <Link
                href={`/blog?page=${currentPage + 1}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ""}`}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
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