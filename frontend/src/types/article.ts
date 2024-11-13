export interface Article {
  id: string;
  title: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  category: string;
  featuredImage: {
    url: string;
    alt: string;
  };
  summary: string;
  content: string;
  publishedDate: string;
  tags: string[];
  status: "draft" | "published" | "archived";
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  recommendations: Article[];
}

export interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  articleId: string;
  parentCommentId?: string;
  status: "pending" | "approved" | "rejected";
  likes: number;
  createdAt: string;
}
