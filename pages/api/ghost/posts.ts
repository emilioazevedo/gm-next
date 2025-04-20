import { NextApiRequest, NextApiResponse } from "next";
import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://gridmonitor-blog.ghost.io", // Verify this URL
  key: "2b4e6ee2b954f7ae32105f6fd2", // Verify this API key
  version: "v5.0", // Try changing this to 'v4' if needed
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const posts = await api.posts.browse({
      limit: "all",
    });
    res.status(200).json(posts);
  } catch (e) {
    console.error("Error fetching posts:", e.response?.data || e.message);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
}
