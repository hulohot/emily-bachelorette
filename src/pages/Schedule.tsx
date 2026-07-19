import SectionHeading from "../components/SectionHeading"
import Card from "../components/Card"
import { schedule } from "../data/content"

export default function Schedule() {
  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        eyebrow="The itinerary"
        title="Schedule"
        subtitle="Here's the plan for the weekend — subject to spontaneous detours."
      />

      {schedule.map((day) => (
        <div key={day.day}>
          <div className="mb-4">
            <p className="font-hand text-2xl text-camp-gold">{day.day}</p>
            <h3 className="font-display text-2xl text-camp-green">{day.date}</h3>
          </div>
          <div className="flex flex-col gap-3">
            {day.items.map((item) => (
              <Card key={item.time + item.title} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-4">
                <span className="font-display text-camp-gold w-28 shrink-0">{item.time}</span>
                <div>
                  <p className="font-medium text-camp-green-dark">{item.title}</p>
                  {item.note && (
                    <p className="text-sm text-camp-green-light">{item.note}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
