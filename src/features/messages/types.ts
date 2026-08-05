export type MessageDirection = 'incoming' | 'outgoing'

export type MessageDeliveryStatus = 'sending' | 'sent' | 'delivered' | 'read'

export interface Message {
  id: string
  body: string
  direction: MessageDirection
  sentAt: string
  dateSeparatorLabel?: string
  channel?: 'SMS'
  senderAddress?: string
  deliveryStatus?: MessageDeliveryStatus
}
