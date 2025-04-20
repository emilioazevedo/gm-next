declare module '@tryghost/content-api' {
  interface GhostContentAPIOptions {
    url: string;
    key: string;
    version: string;
  }

  interface Post {
    id: string;
    slug: string;
    title: string;
    html: string;
    feature_image?: string;
    featured?: boolean;
    excerpt?: string;
    [key: string]: any;
  }

  interface GhostAPI {
    posts: {
      browse: (options?: any) => Promise<Post[]>;
      read: (options: any) => Promise<Post>;
    };
    [key: string]: any;
  }

  export default class GhostContentAPI {
    constructor(options: GhostContentAPIOptions);
    public posts: GhostAPI['posts'];
    public config: GhostContentAPIOptions;
  }
}
