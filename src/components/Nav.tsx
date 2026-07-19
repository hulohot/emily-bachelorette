import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Tent } from "./Doodles"

const links = [
  { to: "/", label: "Welcome" },
  { to: "/schedule", label: "Schedule" },
  { to: "/what-to-bring", label: "What to Bring" },
  { to: "/locations", label: "Locations" },
  { to: "/map", label: "Map" },
  { to: "/photos", label: "Photo Drop" },
  { to: "/outfit", label: "Outfit Inspo" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-full transition-colors ${
      isActive
        ? "bg-camp-green text-camp-cream"
        : "text-camp-green hover:bg-camp-green/10"
    }`

  return (
    <header className="sticky top-0 z-50 bg-camp-cream/90 backdrop-blur border-b-2 border-camp-green/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-display text-xl text-camp-green"
          onClick={() => setOpen(false)}
        >
          <Tent className="w-7 h-7 text-camp-green" />
          Camp Emily
        </NavLink>

        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden text-camp-green p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7 H20 M4 12 H20 M4 17 H20" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden flex flex-col gap-1 px-4 pb-4 font-medium">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
