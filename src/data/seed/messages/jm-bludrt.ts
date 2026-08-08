import type { Message } from '@/features/messages/types'

export const jmBlueDartMessages: Message[] = [
  { id: 'jm-bludrt-1', body: 'Blue Dart: Your shipment has reached the destination service centre.', direction: 'incoming', sentAt: '2026-08-06T13:37:00.000Z', dateSeparatorLabel: 'Thursday', channel: 'SMS' },
  { id: 'jm-bludrt-2', body: 'Blue Dart: Your shipment is out for delivery. Please keep your delivery address accessible.', direction: 'incoming', sentAt: '2026-08-07T09:12:00.000Z', dateSeparatorLabel: 'Yesterday', channel: 'SMS' },
  { id: 'jm-bludrt-3', body: 'ARRIVING: Blue Dart will deliver your shipment TODAY. Field Executive will request an OTP.', direction: 'incoming', sentAt: '2026-08-07T17:30:00.000Z', dateSeparatorLabel: 'Yesterday', channel: 'SMS' },
]
