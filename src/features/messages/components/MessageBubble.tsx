import type { Message } from '@/features/messages/types'
import { linkifyMessageText } from '@/features/messages/utils/linkify'

interface MessageBubbleProps {
  message: Message
}

export function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <article className={`message-row message-row--${message.direction}`}>
      <div className="message-bubble">{linkifyMessageText(message.body)}</div>
    </article>
  )
}
