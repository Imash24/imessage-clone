import type { Message } from '@/features/messages/types'

export const jkCibilaMessages: Message[] = [
  { id: 'jk-cibila-1', body: 'Your CIBIL Score & Report is available. Visit the SBI Card application portal to review your application status.', direction: 'incoming', sentAt: '2026-08-06T10:30:00.000Z', dateSeparatorLabel: 'Thursday', channel: 'SMS' },
  { id: 'jk-cibila-2', body: 'SBI CARD has initiated a credit report enquiry for your application. Enquiry reference: 11437060334.', direction: 'incoming', sentAt: '2026-08-07T08:45:00.000Z', dateSeparatorLabel: 'Yesterday', channel: 'SMS' },
  { id: 'jk-cibila-3', body: 'Your CIBIL Score & Report was checked by SBI CARD ECN:11437060334 on 2026-08-08.', direction: 'incoming', sentAt: '2026-08-08T07:02:00.000Z', dateSeparatorLabel: 'Today', channel: 'SMS' },
]
