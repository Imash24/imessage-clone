import type { Message } from '@/features/messages/types'

export function createPlaceholderHistory(conversationId: string, latestPreview: string, latestAt: string): Message[] {
  const latest = new Date(latestAt)
  const earlier = new Date(latest.getTime() - 86_400_000)
  const oldest = new Date(latest.getTime() - 172_800_000)

  return [
    { id: `${conversationId}-message-01`, body: 'Placeholder update 01', direction: 'incoming', sentAt: oldest.toISOString(), dateSeparatorLabel: 'Monday', channel: 'SMS' },
    { id: `${conversationId}-message-02`, body: 'Placeholder update 02', direction: 'incoming', sentAt: earlier.toISOString(), dateSeparatorLabel: 'Yesterday', channel: 'SMS' },
    { id: `${conversationId}-message-03`, body: latestPreview, direction: 'incoming', sentAt: latest.toISOString(), dateSeparatorLabel: 'Today', channel: 'SMS' },
  ]
}
