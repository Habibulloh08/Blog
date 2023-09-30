import { create } from "zustand";

const useLoader = create((set) => ({
  isLoading: false,
  startLoading: () => set(() => ({ isLoading: true })),
  endLoading: (payload) => set(() => ({ isLoading: payload && false })),
}));
export default useLoader;
