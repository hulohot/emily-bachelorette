import SectionHeading from "../components/SectionHeading"
import Card from "../components/Card"
import { locations } from "../data/content"

export default function Locations() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Where to be"
        title="Locations"
        subtitle="Every address for the weekend, all in downtown Eureka Springs."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
        {locations.map((loc) => (
          <Card key={loc.name}>
            <p className="font-display text-xl text-camp-green">{loc.name}</p>
            <p className="text-camp-green-dark mt-1">{loc.address}</p>
            {loc.note && (
              <p className="text-sm text-camp-green-light mt-1">{loc.note}</p>
            )}
            {loc.url && (
              <a
                href={loc.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-sm font-medium text-camp-gold hover:underline"
              >
                View details &rarr;
              </a>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
