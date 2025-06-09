import { create } from "zustand";
import type { PreloaderState } from "../interface";


export const preloaderStore = create<PreloaderState>((set) => ({
    isLoading:true,
    setLoading:(value) => set({
        isLoading:value
    })
}))