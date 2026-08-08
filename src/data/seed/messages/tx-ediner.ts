import type { Message } from '@/features/messages/types'

export const txEdinerMessages: Message[] = [
  { id: 'tx-ediner-1', body: 'Your dining plan is waiting. Discover new places and reserve your next table today.', direction: 'incoming', sentAt: '2026-08-06T15:41:00.000Z', dateSeparatorLabel: 'Thursday', channel: 'SMS' },
  { id: 'tx-ediner-2', body: 'Weekend plans made easy. Explore dining offers near you before they are gone.', direction: 'incoming', sentAt: '2026-08-07T11:24:00.000Z', dateSeparatorLabel: 'Yesterday', channel: 'SMS' },
  { id: 'tx-ediner-3', body: 'Remember that plan you kept pushing? This is your sign to finally do it.', direction: 'incoming', sentAt: '2026-08-07T13:11:00.000Z', dateSeparatorLabel: 'Yesterday', channel: 'SMS' },
]
