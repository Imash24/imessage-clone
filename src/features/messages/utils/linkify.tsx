import type { ReactNode } from 'react'

const urlPattern = /(https?:\/\/[^\s]+)/g

export function linkifyMessageText(body: string): ReactNode[] {
  return body.split(urlPattern).map((part, index) => {
    if (!part.match(/^https?:\/\//)) {
      return part
    }

    return (
      <a key={`${part}-${index}`} href={part} target="_blank" rel="noreferrer">
        {part}
      </a>
    )
  })
}
