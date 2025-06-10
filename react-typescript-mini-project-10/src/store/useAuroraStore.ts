import { create } from "zustand";

interface UIAuroraStore {
  showAurora: boolean;
  toggleAurora: () => void;
}

export const useAuroraStore = create<UIAuroraStore>((set) => ({
  showAurora: true,
  toggleAurora: () =>
    set((state) => ({
      showAurora: !state.showAurora,
    })),
}));
