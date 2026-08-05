import { create } from 'zustand'
import { localConversationRepository } from '@/data/repositories/local-conversation-repository'
import type { Conversation } from '@/features/conversations/types'

interface ConversationState {
  conversations: Conversation[]
  isLoaded: boolean
  load: () => Promise<void>
  saveAll: (conversations: Conversation[]) => Promise<void>
  reset: () => Promise<void>
}

export const useConversationStore = create<ConversationState>((set) => ({
  conversations: [],
  isLoaded: false,
  load: async () => {
    const conversations = await localConversationRepository.getAll()
    set({ conversations, isLoaded: true })
  },
  saveAll: async (conversations) => {
    set({ conversations, isLoaded: true })
    await localConversationRepository.replaceAll(conversations)
  },
  reset: async () => {
    await localConversationRepository.reset()
    set({ conversations: await localConversationRepository.getAll(), isLoaded: true })
  },
}))
