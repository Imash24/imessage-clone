import { X } from 'lucide-react'
import type { Contact } from '@/features/contacts/types'
import type { Conversation } from '@/features/conversations/types'
import { ConversationEditor } from './ConversationEditor'
import { ConversationManager } from './ConversationManager'

interface DeveloperModeProps {
  contact: Contact
  conversation: Conversation
  conversations: Conversation[]
  onClose: () => void
  onSave: (contact: Contact, conversation: Conversation) => Promise<void>
  onCreate: () => void
  onDelete: () => void
  onDuplicate: () => void
  onMove: (direction: -1 | 1) => void
  onReset: () => void
  onSelect: (conversationId: string) => void
}

export function DeveloperMode({ contact, conversation, conversations, onClose, onSave, onCreate, onDelete, onDuplicate, onMove, onReset, onSelect }: DeveloperModeProps) {
  return (
    <aside className="developer-mode" aria-label="Developer Mode">
      <div className="developer-mode__header">
        <div>
          <p>Local-only tools</p>
          <h2>Developer Mode</h2>
        </div>
        <button className="developer-mode__close" type="button" aria-label="Close Developer Mode" onClick={onClose}>
          <X aria-hidden="true" />
        </button>
      </div>
      <div className="developer-editor">
        <ConversationManager conversation={conversation} conversations={conversations} onCreate={onCreate} onDelete={onDelete} onDuplicate={onDuplicate} onMove={onMove} onReset={onReset} onSelect={onSelect} />
        <ConversationEditor contact={contact} conversation={conversation} onSave={onSave} embedded />
      </div>
    </aside>
  )
}
