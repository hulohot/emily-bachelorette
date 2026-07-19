import type { ReactNode } from "react"

type CardProps = {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white/70 border-2 border-camp-green/15 rounded-2xl shadow-sm p-6 ${className}`}
    >
      {children}
    </div>
  )
}
