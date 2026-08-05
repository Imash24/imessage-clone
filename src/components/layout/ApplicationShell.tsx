import type { PropsWithChildren } from 'react'

export function ApplicationShell({ children }: PropsWithChildren) {
  return <div className="application-shell">{children}</div>
}
