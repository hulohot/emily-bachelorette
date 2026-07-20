export type ScheduleItem = {
  time: string
  title: string
  note?: string
}

export type ScheduleDay = {
  day: string
  date: string
  items: ScheduleItem[]
}

export const schedule: ScheduleDay[] = [
  {
    day: "Day 1",
    date: "Friday, July 24",
    items: [
      { time: "4:00 PM", title: "Arrive at Air B&B", note: "Located in downtown Eureka Springs" },
      { time: "5:30 PM", title: "Dinner at Ermilio's" },
      { time: "8:00 PM", title: "Games, Crafts, Drinks at House" },
    ],
  },
  {
    day: "Day 2",
    date: "Saturday, July 25",
    items: [
      { time: "9:00 AM", title: "Tea Leaf Reading", note: "At the Air B&B" },
      { time: "10:30 AM", title: "Breakfast", note: "At Mud Street Cafe" },
      { time: "Noon", title: "Old Time Photo", note: "At Judge Roy Bean" },
      { time: "1:00 PM", title: "The Lovell Winery" },
      { time: "6:00 PM", title: "Dinner at Amigos" },
      { time: "8:00 PM", title: "Eureka LIVE", note: "Drag Show" },
    ],
  },
  {
    day: "Day 3",
    date: "Sunday, July 26",
    items: [
      { time: "10:00 AM", title: "Check out of Air B&B" },
      { time: "10:15 AM", title: "Breakfast", note: "Location TBD" },
      { time: "Noon", title: "Lake Day", note: "At the Demo Cabin" },
    ],
  },
]

export type PackingSection = {
  title: string
  items: string[]
}

export const packingList: PackingSection[] = [
  {
    title: "Clothes",
    items: [
      "Casual dress/outfit for night 1",
      "PJs",
      "Shorts/bottoms to wear with your green Camp Emily tee (day 2)",
      "Roller derby outfit (night 2)",
      "Swimsuit",
      "Comfy clothes",
    ],
  },
  {
    title: "Other",
    items: ["Drinks of choice"],
  },
]

export type Location = {
  name: string
  address: string
  note?: string
  url?: string
  lat: number
  lng: number
}

export const locations: Location[] = [
  {
    name: "Air B&B",
    address: "Downtown Eureka Springs, AR",
    note: "Details coming soon",
    url: "https://vrbo.onelink.me/ItNz/j91uogru",
    lat: 36.4003,
    lng: -93.7393,
  },
  {
    name: "Ermilio's",
    address: "26 White St, Eureka Springs, AR 72632",
    note: "Dinner, Day 1",
    url: "https://ermilios.com/",
    lat: 36.404826,
    lng: -93.741838,
  },
  {
    name: "Mud Street Cafe",
    address: "22 S Main St G, Eureka Springs, AR 72632",
    url: "https://www.mudstreetcafe.com/",
    lat: 36.400914,
    lng: -93.738668,
  },
  {
    name: "Judge Roy Bean",
    address: "29 S Main St, Eureka Springs, AR 72632",
    note: "Old Time Photo, Day 2",
    url: "https://www.judgeroy.com/#/page/home/",
    lat: 36.401036,
    lng: -93.738698,
  },
  {
    name: "The Lovell Winery",
    address: "115 W Van Buren, Eureka Springs, AR 72632",
    note: "Day 2 afternoon",
    url: "https://www.lovellestate.com/",
    lat: 36.398939,
    lng: -93.747111,
  },
  {
    name: "Amigos",
    address: "75 S Main St, Eureka Springs, AR 72632",
    note: "Dinner, Day 2",
    url: "https://www.amigoseurekasprings.com/",
    lat: 36.400423,
    lng: -93.739853,
  },
  {
    name: "Eureka LIVE",
    address: "35 N Main St, Eureka Springs, AR 72632",
    note: "Drag Show, Day 2",
    url: "https://www.eurekalivear.com/",
    lat: 36.402312,
    lng: -93.73639,
  },
  {
    name: "Demo Cabin",
    address: "569 Lakeview Bend, Eureka Springs, AR 72632",
    note: "Lake Day, Day 3",
    lat: 36.356699,
    lng: -93.845341,
  },
]

export const links = {
  photoDrop: "https://drive.google.com/drive/folders/1dThRAClcL1wXMIko0KqBwlL-ij7RwDsQ?usp=sharing",
  outfitInspo: "https://app.milanote.com/1WpyTN1GFe90aL?p=qkoNzBHCdwR",
}
