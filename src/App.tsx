import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Schedule from "./pages/Schedule"
import WhatToBring from "./pages/WhatToBring"
import Locations from "./pages/Locations"
import MapPage from "./pages/MapPage"
import Photos from "./pages/Photos"
import Outfit from "./pages/Outfit"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/what-to-bring" element={<WhatToBring />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/outfit" element={<Outfit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
