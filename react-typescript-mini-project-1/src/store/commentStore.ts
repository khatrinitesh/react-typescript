import { create } from "zustand"
import type { Comment } from "../interface/types"
import { COMMENTS_API_URL } from "../constants/constants"
import axios from "axios"


interface CommentsState {
  comments: Comment[]
  isLoading: boolean
  error: string | null
  fetchComments: () => Promise<void>
}

export const useCommentsStore = create<CommentsState>((set) => ({
  comments: [],
  isLoading: false,
  error: null,

  fetchComments: async () => {
    set(
        { 
            isLoading: true, 
            error: null 
        }
    )
    try {
      const response = await axios.get<Comment[]>(COMMENTS_API_URL)
      set({ comments: response.data, isLoading: false })
    }
    catch (error: any) {
      set({ error: error.message || 'Error fetching comments', isLoading: false })
    }
  },
}))
