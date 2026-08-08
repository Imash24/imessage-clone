import type { Message } from '@/features/messages/types'

export interface Conversation {
  id: string
  participantIds: string[]
  createdAt?: string
  updatedAt?: string
  sortOrder?: number
  unreadCount?: number
  channel: 'SMS'
  messages: Message[]
}
