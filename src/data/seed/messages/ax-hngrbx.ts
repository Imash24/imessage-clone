import type { Message } from '@/features/messages/types'

export const axHungerBoxMessages: Message[] = [
  { id: 'ax-hngrbx-1', body: 'Your order has been confirmed. We will notify you once it is being prepared.', direction: 'incoming', sentAt: '2026-08-07T12:48:00.000Z', dateSeparatorLabel: 'Yesterday', channel: 'SMS' },
  { id: 'ax-hngrbx-2', body: 'Your order is being prepared. We will let you know when it is ready for pickup.', direction: 'incoming', sentAt: '2026-08-07T13:32:00.000Z', channel: 'SMS' },
  { id: 'ax-hngrbx-3', body: 'Your order is ready! Item(s): Espresso - 60Ml. Please collect it from the counter.', direction: 'incoming', sentAt: '2026-08-07T13:54:00.000Z', channel: 'SMS' },
]
