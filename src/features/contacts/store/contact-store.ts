import { create } from 'zustand'
import { localContactRepository } from '@/data/repositories/local-contact-repository'
import type { Contact } from '@/features/contacts/types'

interface ContactState {
  contacts: Contact[]
  isLoaded: boolean
  load: () => Promise<void>
  saveAll: (contacts: Contact[]) => Promise<void>
  reset: () => Promise<void>
}

export const useContactStore = create<ContactState>((set) => ({
  contacts: [],
  isLoaded: false,
  load: async () => set({ contacts: await localContactRepository.getAll(), isLoaded: true }),
  saveAll: async (contacts) => {
    set({ contacts, isLoaded: true })
    await localContactRepository.replaceAll(contacts)
  },
  reset: async () => {
    await localContactRepository.reset()
    set({ contacts: await localContactRepository.getAll(), isLoaded: true })
  },
}))
