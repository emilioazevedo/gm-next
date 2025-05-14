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
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <section className="blog-page-section min-h-screen pt-20 pb-20 bg-grainy">
      {/* ...existing code for rendering posts and pagination... */}
    </section>
  );
}
