import { getPostBySlug, getAllPosts } from "../../../lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";

// Generate static params for build time - Next.js will pre-render these routes
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Simplify component signature to match Next.js expectations
export default function Page(props: any) {
  // Extract the slug from props
  const { slug } = props.params;
  
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <section className="blog-post-section min-h-screen pt-20 pb-20 flex items-start bg-grainy">
      <div className="container mx-auto px-8 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Blog Content */}
        <div className="md:col-span-2 bg-white/50 p-8 rounded-xl bg-clip-border"
             style={{ 
               border: '1px solid transparent',
               backgroundImage: 'linear-gradient(#ffffff, #ffffff), linear-gradient(150deg, #194f90,  white)',
               backgroundOrigin: 'border-box',
               backgroundClip: 'padding-box, border-box'
             }}>
          <h1 className="text-2xl font-bold text-[#194f90] mb-4">{post.metadata.title}</h1>
          <p className="text-base text-gray-500 mb-6">{post.metadata.date}</p>
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: marked(post.content) }}
          ></div>
        </div>

        {/* Sidebar with Other Blog Entries */}
        <div className="bg-white/50 p-8 rounded-xl border-2 border-zinc-400/40 bg-clip-border">
          <h2 className="text-lg font-bold text-[#194f90] mb-4">Other Posts</h2>
          <ul className="space-y-4 text-base">
            {getAllPosts()
              .filter((otherPost) => otherPost.slug !== slug)
              .map((otherPost) => (
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
    </section>
  );
}
