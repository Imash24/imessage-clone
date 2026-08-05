import { Copy, ListPlus, RotateCcw, Trash2 } from 'lucide-react'
import type { Conversation } from '@/features/conversations/types'

interface ConversationManagerProps {
  conversation: Conversation
  conversations: Conversation[]
  onCreate: () => void
  onDelete: () => void
  onDuplicate: () => void
  onMove: (direction: -1 | 1) => void
  onReset: () => void
  onSelect: (conversationId: string) => void
}

export function ConversationManager({ conversation, conversations, onCreate, onDelete, onDuplicate, onMove, onReset, onSelect }: ConversationManagerProps) {
  const index = conversations.findIndex((item) => item.id === conversation.id)

  return (
    <section className="editor-section conversation-manager">
      <div className="editor-section__title"><h3>Conversation</h3><button className="editor-button editor-button--secondary" type="button" onClick={onCreate}><ListPlus aria-hidden="true" /> Create</button></div>
      <label className="editor-field"><span>Editing</span><select value={conversation.id} onChange={(event) => onSelect(event.target.value)}>{conversations.map((item, itemIndex) => <option key={item.id} value={item.id}>Conversation {itemIndex + 1}</option>)}</select></label>
      <div className="conversation-manager__actions">
        <button type="button" onClick={() => onMove(-1)} disabled={index === 0}>Move up</button>
        <button type="button" onClick={() => onMove(1)} disabled={index === conversations.length - 1}>Move down</button>
        <button type="button" onClick={onDuplicate}><Copy aria-hidden="true" /> Duplicate</button>
        <button type="button" onClick={onDelete}><Trash2 aria-hidden="true" /> Delete</button>
      </div>
      <button className="conversation-manager__reset" type="button" onClick={onReset}><RotateCcw aria-hidden="true" /> Reset to Factory Data</button>
    </section>
  )
}
