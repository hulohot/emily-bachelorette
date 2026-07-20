import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { locations } from "../data/content"

const pinIcon = L.divIcon({
  className: "",
  html: `<svg width="30" height="40" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 0C6.7 0 0 6.7 0 15c0 10.5 15 25 15 25s15-14.5 15-25c0-8.3-6.7-15-15-15z" fill="#2c4a3b" stroke="#faf6ec" stroke-width="1.5"/>
    <circle cx="15" cy="15" r="5.5" fill="#faf6ec"/>
  </svg>`,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -36],
})

export default function LocationsMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current)
    mapRef.current = map

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map)

    const markers = locations.map((loc) =>
      L.marker([loc.lat, loc.lng], { icon: pinIcon })
        .addTo(map)
        .bindPopup(
          `<strong>${loc.name}</strong><br />${loc.address}${loc.note ? `<br /><span style="color:#4d7361">${loc.note}</span>` : ""}`
        )
    )

    const bounds = L.latLngBounds(markers.map((m) => m.getLatLng()))
    map.fitBounds(bounds, { padding: [32, 32] })

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}
