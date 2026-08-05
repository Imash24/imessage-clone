import type { Message } from '@/features/messages/types'
import { DateSeparator } from './DateSeparator'
import { MessageBubble } from './MessageBubble'

interface MessageListProps {
  messages: Message[]
}

function dateLabel(sentAt: string) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date(sentAt))
}

export function MessageList({ messages }: MessageListProps) {
  let previousDate = ''

  return (
    <section className="message-list" aria-label="Conversation messages">
      {messages.map((message) => {
        const currentDate = dateLabel(message.sentAt)
        const separatorLabel = message.dateSeparatorLabel || currentDate
        const shouldShowDate = Boolean(message.dateSeparatorLabel) || currentDate !== previousDate
        previousDate = currentDate

        return (
          <div key={message.id}>
            {shouldShowDate && <DateSeparator label={separatorLabel} />}
            <MessageBubble message={message} />
          </div>
        )
      })}
    </section>
  )
}
