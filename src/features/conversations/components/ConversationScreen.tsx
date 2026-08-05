import type { Contact } from '@/features/contacts/types'
import type { Conversation } from '@/features/conversations/types'
import { ConversationHeader } from './ConversationHeader'
import { MessageComposer } from '@/features/messages/components/MessageComposer'
import { MessageList } from '@/features/messages/components/MessageList'

interface ConversationScreenProps {
  contact: Contact
  conversation: Conversation
}

export function ConversationScreen({ contact, conversation }: ConversationScreenProps) {
  return (
    <section className="iphone" aria-label={`Conversation with ${contact.displayName}`}>
      <div className="iphone__safe-area" />
      <ConversationHeader contact={contact} />
      <MessageList messages={conversation.messages} />
      <MessageComposer />
    </section>
  )
}
