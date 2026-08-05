import type { PropsWithChildren } from 'react'

/**
 * Reserved composition boundary for app-wide providers as the application grows.
 */
export function AppProviders({ children }: PropsWithChildren) {
  return children
}
