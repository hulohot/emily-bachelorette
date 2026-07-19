import type { ReactNode } from "react"
import { Sparkle } from "./Doodles"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: ReactNode
  center?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="font-hand text-2xl text-camp-gold mb-1">{eyebrow}</p>
      )}
      <h2
        className={`font-display text-4xl sm:text-5xl text-camp-green flex items-center gap-3 ${
          center ? "justify-center" : "justify-start"
        }`}
      >
        <Sparkle className="w-6 h-6 text-camp-gold shrink-0 hidden sm:block" />
        {title}
        <Sparkle className="w-6 h-6 text-camp-gold shrink-0 hidden sm:block" />
      </h2>
      {subtitle && (
        <p className="mt-3 text-camp-green-light max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
