import type { Contact } from '@/features/contacts/types'

export interface ContactRepository {
  getAll(): Promise<Contact[]>
  replaceAll(contacts: Contact[]): Promise<void>
  reset(): Promise<void>
}
