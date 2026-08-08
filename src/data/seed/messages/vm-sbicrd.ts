import type { Message } from '@/features/messages/types'

export const vmSbiCrdMessages: Message[] = [
  { id: 'vm-sbicrd-1', body: 'Thank you for your interest in SBI Credit Card. Keep your PAN and income details ready to continue.', direction: 'incoming', sentAt: '2026-08-06T13:18:00.000Z', dateSeparatorLabel: 'Thursday', channel: 'SMS' },
  { id: 'vm-sbicrd-2', body: 'Your SBI Credit Card application is being processed. We will notify you once verification is complete.', direction: 'incoming', sentAt: '2026-08-07T11:05:00.000Z', dateSeparatorLabel: 'Yesterday', channel: 'SMS' },
  { id: 'vm-sbicrd-3', body: 'You have successfully submitted your application for SBI Credit Card (App No. 29430167482).', direction: 'incoming', sentAt: '2026-08-08T06:57:00.000Z', dateSeparatorLabel: 'Today', channel: 'SMS' },
]
