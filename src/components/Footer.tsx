import { Heart } from "./Doodles"

export default function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-camp-green/15 bg-camp-cream-dark/60">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center text-camp-green-light">
        <p className="font-hand text-2xl text-camp-green flex items-center justify-center gap-2">
          Can't wait to celebrate with you <Heart className="w-5 h-5 text-camp-blush" />
        </p>
        <p className="mt-2 text-sm">
          Camp Emily &middot; Eureka Springs, AR &middot; July 24&ndash;26, 2026
        </p>
      </div>
    </footer>
  )
}
