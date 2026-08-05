import type { Conversation } from '@/features/conversations/types'

export interface ConversationRepository {
  getAll(): Promise<Conversation[]>
  replaceAll(conversations: Conversation[]): Promise<void>
  reset(): Promise<void>
}
