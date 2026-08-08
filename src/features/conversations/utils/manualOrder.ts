import type { Conversation } from '@/features/conversations/types'

export function orderConversations(conversations: Conversation[]) {
  return conversations
    .map((conversation, originalIndex) => ({ conversation, originalIndex }))
    .sort((first, second) => (first.conversation.sortOrder ?? first.originalIndex) - (second.conversation.sortOrder ?? second.originalIndex))
    .map(({ conversation }) => conversation)
}

export function applyManualOrder(conversations: Conversation[]) {
  return conversations.map((conversation, sortOrder) => ({ ...conversation, sortOrder }))
}
