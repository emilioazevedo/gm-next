import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define the type for a Post metadata
export interface PostMetadata {
  title: string;
  date: string;
  // Add other metadata properties as needed
}

// Define the type for a Post object
export interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".md")) // Only process Markdown files
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      // Type cast the metadata to PostMetadata
      const metadata = data as PostMetadata;

      return {
        slug: fileName.replace(/\.md$/, ""), // Remove .md extension
        metadata: metadata,
        content,
      };
    });
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null; // Return null if the file does not exist
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Type cast the metadata to PostMetadata
  const metadata = data as PostMetadata;

  return {
    slug: slug, // Add the slug here
    metadata: metadata,
    content,
  };
}