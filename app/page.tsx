"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/hero"
import CasinoList from "@/components/casino-list"
import SafeGaming from "@/components/safe-gaming"
import AboutUs from "@/components/about-us"
import CookieBanner from "@/components/cookie-banner"
import TopCasinoModal from "@/components/top-casino-modal"

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)
  const [cookiesAccepted, setCookiesAccepted] = useState(false)

  useEffect(() => {
    // Check if cookies were previously accepted
    const accepted = localStorage.getItem("cookies-accepted")
    if (accepted) {
      setCookiesAccepted(true)
    }

    // Show modal after 10 seconds
    const timer = setTimeout(() => {
      if (accepted) {
        setShowModal(true)
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const handleCookieAccept = () => {
    localStorage.setItem("cookies-accepted", "true")
    setCookiesAccepted(true)
  }

  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <CasinoList />
      <SafeGaming />
      <AboutUs />

      {!cookiesAccepted && <CookieBanner onAccept={handleCookieAccept} />}

      {showModal && <TopCasinoModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
