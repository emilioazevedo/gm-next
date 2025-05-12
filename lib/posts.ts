import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export interface Post {
  slug: string;
  metadata: {
    title: string;
    date: string;
    excerpt: string;
    author: string;
    [key: string]: any;
  };
  content: string;
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory); // Read all files in the posts directory
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, ""); // Remove the .md extension
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8"); // Read the file contents
    const { data: metadata, content } = matter(fileContents); // Parse the frontmatter and content

    return {
      slug,
      metadata, // Metadata from the frontmatter
      content, // Markdown content
    };
  });

  return posts.sort((a, b) => {
    // Sort posts by date (newest first)
    return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
  });
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Ensure metadata has all required fields
    const metadata = {
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString().split('T')[0],
      excerpt: data.excerpt || "No excerpt available",
      author: data.author || "Anonymous",
      ...data, // Include other fields
    };

    return {
      slug,
      metadata,
      content,
    } as Post;
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error);
    return null;
  }
}