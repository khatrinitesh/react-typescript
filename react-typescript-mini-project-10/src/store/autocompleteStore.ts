import { create } from "zustand";
import type { SuggestionItem } from "../interface";

interface AutocompleteState {
  selected: SuggestionItem | null;
  setSelected: (item: SuggestionItem) => void;
}
export const useAutocompleteStore = create<AutocompleteState>((set) => ({
  selected: null,
  setSelected: (item) => set({ selected: item }),
}));
