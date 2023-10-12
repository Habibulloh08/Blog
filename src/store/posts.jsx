import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  setPosts: (data) => set(() => ({ posts: data })),
}));

export default usePostStore;
