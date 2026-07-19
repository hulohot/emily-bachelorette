import SectionHeading from "../components/SectionHeading"
import Card from "../components/Card"
import { Leaf } from "../components/Doodles"
import { packingList } from "../data/content"

export default function WhatToBring() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Pack your bags"
        title="What to Bring"
        subtitle="A few essentials to make sure you're ready for every part of the weekend."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">
        {packingList.map((section) => (
          <Card key={section.title}>
            <h3 className="font-display text-2xl text-camp-green mb-4">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-camp-green-dark">
                  <Leaf className="w-5 h-5 text-camp-green-light shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}
