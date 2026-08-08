import { Copy, Download } from 'lucide-react'
import { useState } from 'react'
import type { Contact } from '@/features/contacts/types'
import type { Conversation } from '@/features/conversations/types'
import type { Message } from '@/features/messages/types'

interface SeedExportControlsProps {
  contact: Contact
  conversation: Conversation
}

function seedIdentifier(senderName: string) {
  const words = senderName.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).filter((word, index, all) => !(index === all.length - 1 && word.length === 1))
  return `${words.map((word, index) => index === 0 ? word : `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join('')}Messages`
}

function seedFilename(senderName: string) {
  return `${senderName.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replace(/-[a-z]$/, '')}.ts`
}

function typeScriptSeed(senderName: string, messages: Message[]) {
  return `import type { Message } from '@/features/messages/types'\n\nexport const ${seedIdentifier(senderName)}: Message[] = ${JSON.stringify(messages, null, 2)}\n`
}

function download(filename: string, content: string, type: string) {
  const link = document.createElement('a')
  link.href = URL.createObjectURL(new Blob([content], { type }))
  link.download = filename
  link.click()
  URL.revokeObjectURL(link.href)
}

export function SeedExportControls({ contact, conversation }: SeedExportControlsProps) {
  const [status, setStatus] = useState('')
  const filename = seedFilename(contact.displayName)
  const source = typeScriptSeed(contact.displayName, conversation.messages)

  const copySource = async () => {
    try {
      await navigator.clipboard.writeText(source)
      setStatus('TypeScript copied')
    } catch {
      setStatus('Copy was blocked; download the file instead')
    }
  }

  return (
    <section className="editor-section seed-export-controls">
      <h3>Seed data export</h3>
      <p>Exports are source files to copy into <code>src/data/seed/messages</code>; browser edits stay local until committed.</p>
      <div className="seed-export-controls__actions">
        <button className="editor-button editor-button--secondary" type="button" onClick={copySource}><Copy aria-hidden="true" /> Copy TypeScript</button>
        <button className="editor-button editor-button--secondary" type="button" onClick={() => download(filename, source, 'text/typescript')}><Download aria-hidden="true" /> Download .ts</button>
        <button className="editor-button editor-button--secondary" type="button" onClick={() => download(`${filename.slice(0, -3)}.json`, JSON.stringify({ conversationId: conversation.id, sender: contact.displayName, messages: conversation.messages }, null, 2), 'application/json')}><Download aria-hidden="true" /> Download JSON</button>
      </div>
      {status && <p className="seed-export-controls__status" role="status">{status}</p>}
    </section>
  )
}
