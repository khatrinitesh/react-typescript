import { create } from "zustand";
import type { TeamState } from "../interface";


export const useTeamStore = create<TeamState>((set) => ({
  selectedMember: null,
  selectMember: (member) => set({ selectedMember: member }),
  clearSelection: () => set({ selectedMember: null }),
}));