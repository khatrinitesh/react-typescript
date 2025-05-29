import { create } from 'zustand';

interface CardStore {
  selectedCardId: number | null;
  setSelectedCard: (id: number | null) => void;
}

export const useCardStore = create<CardStore>((set) => ({
  selectedCardId: null,
  setSelectedCard: (id) => set({ selectedCardId: id }),
}));
