import { Link } from "react-router-dom"
import campEmilyGraphic from "../assets/camp-emily-graphic.png"
import Card from "../components/Card"
import { Sparkle } from "../components/Doodles"

const quickLinks = [
  { to: "/schedule", label: "Schedule", desc: "Where to be and when" },
  { to: "/what-to-bring", label: "What to Bring", desc: "Pack the essentials" },
  { to: "/locations", label: "Locations", desc: "Addresses for the weekend" },
  { to: "/map", label: "Map", desc: "Everything pinned in Eureka Springs" },
  { to: "/photos", label: "Photo Drop", desc: "Share your favorite shots" },
  { to: "/outfit", label: "Outfit Inspo", desc: "Roller derby night looks" },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center gap-10">
      <div className="relative">
        <Sparkle className="w-8 h-8 text-camp-gold absolute -top-2 -left-8 hidden sm:block" />
        <Sparkle className="w-6 h-6 text-camp-gold absolute top-4 -right-6 hidden sm:block" />
        <img
          src={campEmilyGraphic}
          alt="Camp Emily — Bachelorette Weekend, Eureka Springs, AR, July 2026"
          className="w-full max-w-md mx-auto"
        />
      </div>

      <div className="max-w-2xl">
        <p className="font-hand text-3xl text-camp-gold">You're invited to...</p>
        <h1 className="font-display text-3xl sm:text-4xl text-camp-green mt-1">
          Emily's Bachelorette Weekend
        </h1>
        <p className="mt-4 text-lg text-camp-green-light">
          Grab your camp tee and your dancing shoes — we're heading to Eureka
          Springs, Arkansas for a weekend of good food, good drinks, and even
          better company.
        </p>
        <p className="mt-4 font-hand text-2xl text-camp-green">
          July 24&ndash;26, 2026
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {quickLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            <Card className="h-full text-left hover:border-camp-green/40 hover:shadow-md transition-all">
              <p className="font-display text-xl text-camp-green">{link.label}</p>
              <p className="text-sm text-camp-green-light mt-1">{link.desc}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
