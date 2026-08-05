interface BrowserStorage {
  read: <T>(key: string) => T | null
  remove: (key: string) => void
  write: <T>(key: string, value: T) => void
}

export const browserStorage: BrowserStorage = {
  read<T>(key: string): T | null {
    try {
      const value = window.localStorage.getItem(key)
      return value === null ? null : (JSON.parse(value) as T)
    } catch {
      return null
    }
  },

  remove(key: string) {
    window.localStorage.removeItem(key)
  },

  write<T>(key: string, value: T) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
}
