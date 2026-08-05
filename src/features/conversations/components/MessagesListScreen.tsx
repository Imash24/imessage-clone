import { ChevronRight, CircleEllipsis, Search, SquarePen } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Contact } from '@/features/contacts/types'
import type { Conversation } from '@/features/conversations/types'
import { ContactAvatar } from './ContactAvatar'

interface MessagesListScreenProps {
  contacts: Contact[]
  conversations: Conversation[]
}

function timestampLabel(timestamp: string) {
  return new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' }).format(new Date(timestamp))
}

export function MessagesListScreen({ contacts, conversations }: MessagesListScreenProps) {
  const contactsById = new Map(contacts.map((contact) => [contact.id, contact]))

  return (
    <main className="messages-home" aria-label="Messages">
      <div className="messages-home__safe-area" />
      <header className="messages-home__header">
        <div className="messages-home__title-row">
          <h1>Messages</h1>
          <div className="messages-home__header-actions">
            <button className="messages-home__header-button" type="button" aria-label="More options"><CircleEllipsis aria-hidden="true" /></button>
            <button className="messages-home__header-button" type="button" aria-label="Compose message"><SquarePen aria-hidden="true" /></button>
          </div>
        </div>
        <div className="messages-home__search-row">
          <label className="messages-search"><Search aria-hidden="true" /><span className="sr-only">Search</span><input type="search" placeholder="Search" readOnly /></label>
          <button className="messages-filter" type="button">Filters</button>
        </div>
      </header>
      <section className="conversation-list" aria-label="Conversations">
        {conversations.map((conversation) => {
          const contact = contactsById.get(conversation.participantIds[0])
          const preview = conversation.messages.at(-1)?.body
          if (!contact) return null

          return (
            <Link className="conversation-list-item" key={conversation.id} to={`/conversations/${conversation.id}`}>
              <ContactAvatar size="list" />
              <div className="conversation-list-item__content">
                <div className="conversation-list-item__topline">
                  <div className="conversation-list-item__name"><span>{contact.displayName}</span></div>
                  {conversation.updatedAt && <time dateTime={conversation.updatedAt}>{timestampLabel(conversation.updatedAt)}</time>}
                </div>
                <div className="conversation-list-item__bottomline">
                  <p>{preview}</p>
                  {conversation.unreadCount ? <span className="unread-dot" aria-label={`${conversation.unreadCount} unread messages`} /> : null}
                  <ChevronRight aria-hidden="true" />
                </div>
              </div>
            </Link>
          )
        })}
      </section>
    </main>
  )
}
