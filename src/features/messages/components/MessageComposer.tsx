import { Camera, Mic, Plus } from 'lucide-react'

export function MessageComposer() {
  return (
    <form className="message-composer" onSubmit={(event) => event.preventDefault()}>
      <button className="composer-action" type="button" aria-label="Open apps">
        <span className="composer-plus" aria-hidden="true">
          <Plus />
        </span>
      </button>
      <label className="composer-input">
        <span className="sr-only">iMessage</span>
        <input type="text" placeholder="iMessage" readOnly />
        <Camera aria-hidden="true" />
      </label>
      <button className="composer-action" type="button" aria-label="Record audio message">
        <Mic aria-hidden="true" />
      </button>
    </form>
  )
}
