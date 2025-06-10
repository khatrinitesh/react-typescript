import { create } from "zustand";
import { POSTS_ENDPOINT } from "../constants/constants";
import type { Post } from "../interface";

interface PostStore {
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
  deletePost: (id: number) => void;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(POSTS_ENDPOINT);
      const data = await response.json();
      set({
        posts: data,
        loading: false,
      });
    } catch (error) {
      set({
        error: "Failed to fetch posts",
        loading: false,
      });
    }
  },

  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
}));
