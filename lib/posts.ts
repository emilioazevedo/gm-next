import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    try {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      if (!data.title || !data.date || !data.excerpt) {
        throw new Error(`Missing required frontmatter in file: ${fileName}`);
      }

      return {
        slug: fileName.replace(/\.md$/, ""), // Remove .md extension
        metadata: data,
        content,
      };
    } catch (error) {
      console.error(`Error processing file ${fileName}:`, error.message);
      return null; // Skip invalid files
    }
  }).filter(Boolean); // Remove null entries
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    metadata: data,
    content,
  };
}
