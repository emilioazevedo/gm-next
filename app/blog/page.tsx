// This file ensures /blog renders page 1 using the catch-all route.

import BlogPage from "./[...slug]/page";

export default function Page() {
  // Forward to the paginated blog with page 1
  return <BlogPage params={Promise.resolve({ slug: [] })} />;
}
