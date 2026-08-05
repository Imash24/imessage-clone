import type { Message } from '@/features/messages/types'

export const adKotakbMessages: Message[] = [
  {
    id: 'ad-kotakb-1',
    body: 'Rs.75000 credited to your Kotak Bank a/c XX0273 via NEFT from beneficiary DELOITTE PL-PAYROLL TRANSIT AC. UTR Ref. CITIN26708199272.',
    direction: 'incoming',
    sentAt: '2026-08-04T03:27:00.000Z',
    dateSeparatorLabel: 'Yesterday',
    channel: 'SMS',
  },
  {
    id: 'ad-kotakb-2',
    body: 'Received Rs.15.00 in your Kotak Bank AC X0273 from bharathkanth46-1@oksbi on 26-07-26. UPI Ref:620727302570.',
    direction: 'incoming',
    sentAt: '2026-07-26T16:06:00.000Z',
    dateSeparatorLabel: 'Sunday',
    channel: 'SMS',
  },
  {
    id: 'ad-kotakb-3',
    body: 'Received Rs.25.00 in your Kotak Bank AC X0273 from bharathkanth46@okhdfcbank on 25-07-26. UPI Ref:126831326313.',
    direction: 'incoming',
    sentAt: '2026-07-25T13:52:00.000Z',
    dateSeparatorLabel: 'Sat, 25 Jul',
    channel: 'SMS',
  },
  {
    id: 'ad-kotakb-4',
    body: 'Rs.500 debited from your Kotak Bank AC X0273 on 21-07-26. UPI Ref 620276490613. Not you? https://kotak.com/KBANKT/Fraud',
    direction: 'incoming',
    sentAt: '2026-07-21T10:20:00.000Z',
    dateSeparatorLabel: 'Monday',
    channel: 'SMS',
  },
]