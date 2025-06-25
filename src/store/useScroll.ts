import { create } from "zustand";

interface ScrollStore {
  scroll: number;
  setScroll: (scroll: number) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
  scroll: 0,
  setScroll: (scroll) => set({ scroll }),
}));
