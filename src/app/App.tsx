import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { ApplicationShell } from '@/components/layout/ApplicationShell'
import { appRoutes } from '@/app/routes'
import { seedContacts } from '@/data/seed/contacts'
import { seedConversations } from '@/data/seed/conversations'
import { useContactStore } from '@/features/contacts/store/contact-store'
import { MessagesListScreen } from '@/features/conversations/components/MessagesListScreen'
import { ConversationScreen } from '@/features/conversations/components/ConversationScreen'
import { useConversationStore } from '@/features/conversations/store/conversation-store'
import { DeveloperMode } from '@/features/developer-mode/components/DeveloperMode'
import type { Contact } from '@/features/contacts/types'
import type { Conversation } from '@/features/conversations/types'

interface ScreenProps {
  contacts: Contact[]
  conversations: Conversation[]
  isDeveloperModeOpen: boolean
  onCloseDeveloperMode: () => void
  onSaveContent: (contact: Contact, conversation: Conversation) => Promise<void>
  onSaveAll: (contacts: Contact[], conversations: Conversation[]) => Promise<void>
  onReset: () => Promise<void>
}

function ScreenWithDeveloperMode({ contact, conversation, props }: { contact: Contact; conversation: Conversation; props: ScreenProps }) {
  const navigate = useNavigate()
  const updateConversations = (nextConversations: Conversation[]) => void props.onSaveAll(props.contacts, nextConversations)
  const createConversation = () => {
    const id = crypto.randomUUID()
    const nextContact = { id: `contact-${id}`, displayName: 'New Conversation', avatarInitials: 'NC' }
    const nextConversation = { id: `conversation-${id}`, participantIds: [nextContact.id], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), channel: 'SMS' as const, messages: [] }
    void props.onSaveAll([...props.contacts, nextContact], [...props.conversations, nextConversation])
    navigate(appRoutes.conversation(nextConversation.id))
  }
  const duplicateConversation = () => {
    const id = crypto.randomUUID()
    const duplicateContact = { ...contact, id: `contact-${id}`, displayName: `${contact.displayName} Copy` }
    const duplicate = { ...conversation, id: `conversation-${id}`, participantIds: [duplicateContact.id], messages: conversation.messages.map((message) => ({ ...message, id: crypto.randomUUID() })) }
    void props.onSaveAll([...props.contacts, duplicateContact], [...props.conversations, duplicate])
    navigate(appRoutes.conversation(duplicate.id))
  }
  const deleteConversation = () => {
    if (props.conversations.length === 1) return
    void props.onSaveAll(props.contacts.filter((item) => item.id !== contact.id), props.conversations.filter((item) => item.id !== conversation.id))
    navigate(appRoutes.home)
  }
  const moveConversation = (direction: -1 | 1) => {
    const index = props.conversations.findIndex((item) => item.id === conversation.id)
    const destination = index + direction
    if (destination < 0 || destination >= props.conversations.length) return
    const next = [...props.conversations]
    const [item] = next.splice(index, 1)
    next.splice(destination, 0, item)
    updateConversations(next)
  }

  return (
    <div className={`simulator-layout ${props.isDeveloperModeOpen ? 'simulator-layout--editing' : ''}`}>
      <ConversationScreen contact={contact} conversation={conversation} />
      {props.isDeveloperModeOpen && <DeveloperMode contact={contact} conversation={conversation} conversations={props.conversations} onClose={props.onCloseDeveloperMode} onSave={props.onSaveContent} onCreate={createConversation} onDelete={deleteConversation} onDuplicate={duplicateConversation} onMove={moveConversation} onReset={() => { void props.onReset(); navigate(appRoutes.home) }} onSelect={(conversationId) => navigate(appRoutes.conversation(conversationId))} />}
    </div>
  )
}

function ConversationRoute({ props }: { props: ScreenProps }) {
  const { conversationId } = useParams()
  const conversation = props.conversations.find((item) => item.id === conversationId)
  const contact = conversation ? props.contacts.find((item) => item.id === conversation.participantIds[0]) : undefined
  if (!conversation || !contact) return <Navigate to={appRoutes.home} replace />
  return <ScreenWithDeveloperMode contact={contact} conversation={conversation} props={props} />
}

function HomeRoute({ props }: { props: ScreenProps }) {
  const firstConversation = props.conversations[0]
  const firstContact = firstConversation ? props.contacts.find((item) => item.id === firstConversation.participantIds[0]) : undefined
  if (props.isDeveloperModeOpen && firstConversation && firstContact) return <ScreenWithDeveloperMode contact={firstContact} conversation={firstConversation} props={props} />
  return <MessagesListScreen contacts={props.contacts} conversations={props.conversations} />
}

export function App() {
  const [isDeveloperModeOpen, setDeveloperModeOpen] = useState(false)
  const contacts = useContactStore((state) => state.contacts)
  const loadContacts = useContactStore((state) => state.load)
  const saveContacts = useContactStore((state) => state.saveAll)
  const resetContacts = useContactStore((state) => state.reset)
  const conversations = useConversationStore((state) => state.conversations)
  const loadConversations = useConversationStore((state) => state.load)
  const saveConversations = useConversationStore((state) => state.saveAll)
  const resetConversations = useConversationStore((state) => state.reset)
  const resolvedContacts = contacts.length ? contacts : seedContacts
  const resolvedConversations = conversations.length ? conversations : seedConversations

  useEffect(() => { void loadContacts(); void loadConversations() }, [loadContacts, loadConversations])
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.shiftKey && event.key.toLowerCase() === 'd') {
        event.preventDefault(); setDeveloperModeOpen((isOpen) => !isOpen)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const saveAll = async (nextContacts: Contact[], nextConversations: Conversation[]) => {
    await Promise.all([saveContacts(nextContacts), saveConversations(nextConversations)])
  }
  const saveContent = async (contact: Contact, conversation: Conversation) => {
    await saveAll(resolvedContacts.map((item) => item.id === contact.id ? contact : item), resolvedConversations.map((item) => item.id === conversation.id ? conversation : item))
  }
  const reset = async () => { await Promise.all([resetContacts(), resetConversations()]); setDeveloperModeOpen(false) }
  const props: ScreenProps = { contacts: resolvedContacts, conversations: resolvedConversations, isDeveloperModeOpen, onCloseDeveloperMode: () => setDeveloperModeOpen(false), onSaveContent: saveContent, onSaveAll: saveAll, onReset: reset }

  return <ApplicationShell><Routes><Route path={appRoutes.home} element={<HomeRoute props={props} />} /><Route path="/conversations/:conversationId" element={<ConversationRoute props={props} />} /><Route path="*" element={<Navigate to={appRoutes.home} replace />} /></Routes></ApplicationShell>
}
