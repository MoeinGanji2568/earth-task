import { RefObject } from "react";
import { create } from "zustand";

interface SectionPosition {
  id: string;
  top: number;
  bottom: number;
  ref?: RefObject<HTMLDivElement | null> | undefined;
}

interface SectionStore {
  sections: SectionPosition[];
  setSectionPosition: (position: SectionPosition) => void;
  getSectionById: (id: string) => SectionPosition | undefined;
}

export const useSectionStore = create<SectionStore>((set, get) => ({
  sections: [],

  setSectionPosition: (newPosition) =>
    set((state) => {
      const existing = state.sections.find((sec) => sec.id === newPosition.id);
      if (existing) {
        return {
          sections: state.sections.map((sec) =>
            sec.id === newPosition.id ? newPosition : sec
          ),
        };
      } else {
        return {
          sections: [...state.sections, newPosition],
        };
      }
    }),

  getSectionById: (id) => {
    return get().sections.find((sec) => sec.id === id);
  },
}));
