import { create } from "zustand";

interface UIState {
  showBackgroundLines: boolean;
  toggleLines: () => void;
}

export const bgLineStore = create<UIState>((set) => ({
  showBackgroundLines: true,
  toggleLines: () =>
    set((state) => ({ showBackgroundLines: !state.showBackgroundLines })),
}));
