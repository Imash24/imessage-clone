import { Copy, Plus, Save, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Contact } from '@/features/contacts/types'
import type { Conversation } from '@/features/conversations/types'
import type { Message } from '@/features/messages/types'

interface ConversationEditorProps {
  contact: Contact
  conversation: Conversation
  onSave: (contact: Contact, conversation: Conversation) => Promise<void>
  embedded?: boolean
}

function toDateTimeLocal(value: string) {
  const date = new Date(value)
  const offset = date.getTimezoneOffset() * 60_000
  return new Date(date.getTime() - offset).toISOString().slice(0, 16)
}

function makeMessage(): Message {
  return {
    id: crypto.randomUUID(),
    body: '',
    direction: 'incoming',
    sentAt: new Date().toISOString(),
  }
}

export function ConversationEditor({ contact, conversation, onSave, embedded = false }: ConversationEditorProps) {
  const [draftContact, setDraftContact] = useState(contact)
  const [draftMessages, setDraftMessages] = useState(conversation.messages)
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setDraftContact(contact)
    setDraftMessages(conversation.messages)
  }, [contact, conversation])

  const updateMessage = (id: string, changes: Partial<Message>) => {
    setDraftMessages((messages) => messages.map((message) => (message.id === id ? { ...message, ...changes } : message)))
    setSaved(false)
  }

  const moveMessage = (index: number, direction: -1 | 1) => {
    const destination = index + direction
    if (destination < 0 || destination >= draftMessages.length) return
    setDraftMessages((messages) => {
      const reordered = [...messages]
      const [message] = reordered.splice(index, 1)
      reordered.splice(destination, 0, message)
      return reordered
    })
    setSaved(false)
  }

  const save = async () => {
    setIsSaving(true)
    await onSave(draftContact, { ...conversation, messages: draftMessages, updatedAt: new Date().toISOString() })
    setIsSaving(false)
    setSaved(true)
  }

  return (
    <div className={embedded ? 'developer-editor__content' : 'developer-editor'}>
      <section className="editor-section">
        <h3>Contact</h3>
        <label className="editor-field">
          <span>Name</span>
          <input value={draftContact.displayName} onChange={(event) => { setDraftContact({ ...draftContact, displayName: event.target.value }); setSaved(false) }} />
        </label>
        <label className="editor-field">
          <span>Avatar initials</span>
          <input maxLength={3} value={draftContact.avatarInitials ?? ''} onChange={(event) => { setDraftContact({ ...draftContact, avatarInitials: event.target.value.toUpperCase() }); setSaved(false) }} />
        </label>
      </section>

      <section className="editor-section">
        <div className="editor-section__title">
          <h3>Messages</h3>
          <button className="editor-button editor-button--secondary" type="button" onClick={() => { setDraftMessages((messages) => [...messages, makeMessage()]); setSaved(false) }}>
            <Plus aria-hidden="true" /> Create
          </button>
        </div>
        <div className="editor-messages">
          {draftMessages.map((message, index) => (
            <article className="editor-message" key={message.id}>
              <div className="editor-message__toolbar">
                <span>Message {index + 1}</span>
                <div>
                  <button type="button" aria-label="Move message up" disabled={index === 0} onClick={() => moveMessage(index, -1)}>↑</button>
                  <button type="button" aria-label="Move message down" disabled={index === draftMessages.length - 1} onClick={() => moveMessage(index, 1)}>↓</button>
                  <button type="button" aria-label="Duplicate message" onClick={() => { const duplicate = { ...message, id: crypto.randomUUID() }; setDraftMessages((messages) => [...messages.slice(0, index + 1), duplicate, ...messages.slice(index + 1)]); setSaved(false) }}><Copy aria-hidden="true" /></button>
                  <button type="button" aria-label="Delete message" onClick={() => { setDraftMessages((messages) => messages.filter((item) => item.id !== message.id)); setSaved(false) }}><Trash2 aria-hidden="true" /></button>
                </div>
              </div>
              <label className="editor-field">
                <span>Message text</span>
                <textarea rows={4} value={message.body} placeholder="Paste text or a URL" onChange={(event) => updateMessage(message.id, { body: event.target.value })} />
              </label>
              <label className="editor-field">
                <span>Timestamp</span>
                <input type="datetime-local" value={toDateTimeLocal(message.sentAt)} onChange={(event) => updateMessage(message.id, { sentAt: new Date(event.target.value).toISOString() })} />
              </label>
              <label className="editor-field">
                <span>Date separator (optional)</span>
                <input value={message.dateSeparatorLabel ?? ''} placeholder="e.g. Today 9:41 AM" onChange={(event) => updateMessage(message.id, { dateSeparatorLabel: event.target.value || undefined })} />
              </label>
            </article>
          ))}
        </div>
      </section>
      <div className="editor-save-bar">
        <span role="status">{saved ? 'Saved locally' : 'Unsaved changes'}</span>
        <button className="editor-button editor-button--primary" type="button" disabled={isSaving} onClick={save}>
          <Save aria-hidden="true" /> {isSaving ? 'Saving…' : 'Save'}
        </button>
      </div>
    </div>
  )
}
