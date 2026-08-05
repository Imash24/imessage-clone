import { seedInbox } from './inbox'
import type { Contact } from '@/features/contacts/types'

export const seedContacts: Contact[] = seedInbox.map(({ id, senderName }) => ({
  id: `contact-${id}`,
  displayName: senderName,
}))
