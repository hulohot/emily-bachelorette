type DoodleProps = {
  className?: string
}

export function Sparkle({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M20 4 C20 12 22 18 32 20 C22 22 20 28 20 36 C20 28 18 22 8 20 C18 18 20 12 20 4 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Star({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M20 5 L23.5 16 L34 16 L25.5 22.5 L28.5 33 L20 26.5 L11.5 33 L14.5 22.5 L6 16 L16.5 16 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Leaf({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M8 32 C8 16 18 6 34 6 C34 22 24 32 8 32 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 31 C16 24 22 18 33 7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function Heart({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M20 33 C6 24 4 15 11 10.5 C16 7.5 20 11 20 15 C20 11 24 7.5 29 10.5 C36 15 34 24 20 33 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Tent({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M4 32 L20 8 L36 32 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M20 8 L20 32" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 32 L20 22 L25 32" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
