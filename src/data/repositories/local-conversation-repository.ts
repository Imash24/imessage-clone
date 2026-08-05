import type { ConversationRepository } from './conversation-repository'
import { seedConversations } from '@/data/seed/conversations'
import { copySeed } from '@/data/seed/copySeed'
import type { Conversation } from '@/features/conversations/types'
import { browserStorage } from '@/lib/storage/browser-storage'

const factoryStorageKey = 'messages-simulator.factory-v3-conversations'
const userStorageKey = 'messages-simulator.user-v3-conversations'

export const localConversationRepository: ConversationRepository = {
  async getAll() {
    const userConversations = browserStorage.read<Conversation[]>(userStorageKey)
    if (userConversations) return userConversations
    const factoryConversations = browserStorage.read<Conversation[]>(factoryStorageKey)
    if (factoryConversations) return factoryConversations
    const initialFactoryData = copySeed(seedConversations)
    browserStorage.write(factoryStorageKey, initialFactoryData)
    return initialFactoryData
  },

  async replaceAll(conversations) {
    browserStorage.write(userStorageKey, conversations)
  },

  async reset() {
    browserStorage.remove(userStorageKey)
    browserStorage.write(factoryStorageKey, copySeed(seedConversations))
  },
}
