import SectionHeading from "../components/SectionHeading"
import LocationsMap from "../components/LocationsMap"
import { locations } from "../data/content"

export default function MapPage() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Get your bearings"
        title="Map of Eureka Springs"
        subtitle="Everything for the weekend, pinned. Most of downtown is walkable — the Demo Cabin is a short drive south by the lake."
      />

      <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 border-camp-green/15 shadow-sm h-[420px] sm:h-[500px]">
        <LocationsMap />
      </div>

      <div className="max-w-3xl mx-auto w-full text-center">
        <p className="text-camp-green-light">
          Need an address? Every stop is listed on the{" "}
          <a href="/locations" className="text-camp-gold font-medium hover:underline">
            Locations page
          </a>
          .
        </p>
        <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-camp-green-dark">
          {locations.map((loc) => (
            <li key={loc.name}>{loc.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
