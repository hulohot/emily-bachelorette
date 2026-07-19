import SectionHeading from "../components/SectionHeading"
import Card from "../components/Card"
import { Star } from "../components/Doodles"
import { links } from "../data/content"

export default function Outfit() {
  return (
    <div className="flex flex-col gap-10 items-center text-center">
      <SectionHeading
        eyebrow="Night 2"
        title="Roller Derby Outfit Inspo"
        subtitle="Lace up! Here's the moodboard for our roller derby night look."
      />

      <Card className="max-w-md w-full">
        <Star className="w-8 h-8 text-camp-gold mx-auto mb-2" />
        <p className="text-camp-green-dark">
          Browse the full inspiration board for outfit ideas before you pack.
        </p>
        <a
          href={links.outfitInspo}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 px-6 py-3 rounded-full bg-camp-green text-camp-cream font-display hover:bg-camp-green-dark transition-colors"
        >
          View Outfit Inspo
        </a>
      </Card>
    </div>
  )
}
