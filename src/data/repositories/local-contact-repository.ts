import { seedContacts } from '@/data/seed/contacts'
import { copySeed } from '@/data/seed/copySeed'
import type { Contact } from '@/features/contacts/types'
import { browserStorage } from '@/lib/storage/browser-storage'
import type { ContactRepository } from './contact-repository'

const factoryStorageKey = 'messages-simulator.factory-v3-contacts'
const userStorageKey = 'messages-simulator.user-v3-contacts'

export const localContactRepository: ContactRepository = {
  async getAll() {
    const userContacts = browserStorage.read<Contact[]>(userStorageKey)
    if (userContacts) return userContacts
    const factoryContacts = browserStorage.read<Contact[]>(factoryStorageKey)
    if (factoryContacts) return factoryContacts
    const initialFactoryData = copySeed(seedContacts)
    browserStorage.write(factoryStorageKey, initialFactoryData)
    return initialFactoryData
  },

  async replaceAll(contacts) {
    browserStorage.write(userStorageKey, contacts)
  },

  async reset() {
    browserStorage.remove(userStorageKey)
    browserStorage.write(factoryStorageKey, copySeed(seedContacts))
  },
}
