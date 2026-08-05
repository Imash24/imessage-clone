import { ChevronDown, ChevronLeft } from 'lucide-react'
import type { Contact } from '@/features/contacts/types'
import { ContactAvatar } from './ContactAvatar'

interface ConversationHeaderProps {
  contact: Contact
}

export function ConversationHeader({ contact }: ConversationHeaderProps) {
  return (
    <header className="conversation-header">
      <button className="icon-button icon-button--back" type="button" aria-label="Back to messages">
        <ChevronLeft aria-hidden="true" strokeWidth={2.5} />
        <span>Messages</span>
      </button>

      <button className="contact-heading" type="button" aria-label={`View ${contact.displayName}'s contact details`}>
        <ContactAvatar />
        <span>{contact.displayName}</span>
        <ChevronDown className="contact-heading__chevron" aria-hidden="true" />
      </button>
    </header>
  )
}
