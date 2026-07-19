import SectionHeading from "../components/SectionHeading"
import Card from "../components/Card"
import { Sparkle } from "../components/Doodles"
import { links } from "../data/content"

export default function Photos() {
  return (
    <div className="flex flex-col gap-10 items-center text-center">
      <SectionHeading
        eyebrow="Capture the memories"
        title="Photo Drop"
        subtitle="Snap away all weekend and drop your favorites in the shared album so nobody misses a moment."
      />

      <Card className="max-w-md w-full">
        <Sparkle className="w-8 h-8 text-camp-gold mx-auto mb-2" />
        <p className="text-camp-green-dark">
          Every photo from Camp Emily lives in one shared Google Drive folder.
        </p>
        <a
          href={links.photoDrop}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 px-6 py-3 rounded-full bg-camp-green text-camp-cream font-display hover:bg-camp-green-dark transition-colors"
        >
          Open the Photo Drop
        </a>
      </Card>
    </div>
  )
}
