import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
