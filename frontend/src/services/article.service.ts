import axios from "axios";
import { Article, Comment } from "../types/article";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const ArticleService = {
  getArticles: async () => {
    const response = await axios.get(`${API_URL}/articles`);
    return response.data;
  },

  getArticle: async (id: string) => {
    const response = await axios.get(`${API_URL}/articles/${id}`);
    return response.data;
  },

  getArticlesByCategory: async (category: string) => {
    const response = await axios.get(`${API_URL}/articles?category=${category}`);
    return response.data;
  },

  getComments: async (articleId: string) => {
    const response = await axios.get(`${API_URL}/comments?articleId=${articleId}`);
    return response.data;
  },

  addComment: async (comment: Partial<Comment>) => {
    const response = await axios.post(`${API_URL}/comments`, comment);
    return response.data;
  }
};
