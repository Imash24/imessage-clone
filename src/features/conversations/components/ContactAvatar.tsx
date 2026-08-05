interface ContactAvatarProps {
  size?: 'header' | 'list' | 'profile'
}

export function ContactAvatar({ size = 'header' }: ContactAvatarProps) {
  return (
    <span className={`contact-avatar contact-avatar--${size}`} aria-hidden="true">
      <span className="contact-avatar__silhouette" />
    </span>
  )
}
