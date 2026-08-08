import { seedInbox } from './inbox'
import { seedMessagesByConversationId } from './messages'
import type { Conversation } from '@/features/conversations/types'

export const seedConversations: Conversation[] = seedInbox.map((item, sortOrder) => ({
  id: `conversation-${item.id}`,
  participantIds: [`contact-${item.id}`],
  channel: 'SMS',
  sortOrder,
  unreadCount: item.unreadCount,
  createdAt: seedMessagesByConversationId[item.id][0]?.sentAt,
  updatedAt: item.updatedAt,
  messages: seedMessagesByConversationId[item.id],
}))
