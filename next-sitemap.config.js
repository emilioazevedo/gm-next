module.exports = {
  siteUrl: process.env.SITE_URL || "https://example.com", // Use a placeholder for now
  generateRobotsTxt: true, // Generate robots.txt file
  exclude: ["/admin/*", "/api/*"], // Exclude specific paths
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", disallow: "/admin" },
    ],
  },
};
