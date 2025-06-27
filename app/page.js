"use client"

import { useState, useEffect } from "react"
import WelcomePage from "../components/WelcomePage"
import Header from "../components/Header"
import MoodJournal from "../components/MoodJournal"
import PeaceGarden from "../components/PeaceGarden"
import PeaceJar from "../components/PeaceJar"
import Footer from "../components/Footer"
import MusicPlayer from "@/components/MusicPlayer"

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [dayCount, setDayCount] = useState(1)
  const [quoteOfTheDay, setQuoteOfTheDay] = useState("")

  useEffect(() => {
    // Load peace quotes for PeaceJar
    const loadPeaceQuotes = async () => {
      try {
        const response = await fetch("/peace-quotes.json")
        const data = await response.json()

        // Calculate day count and set quote
        const today = new Date().toDateString()
        const stored = localStorage.getItem("soulspace-data")
        const userData = stored ? JSON.parse(stored) : null

        let currentDay = 1

        if (userData && userData.lastVisited) {
          const lastVisit = new Date(userData.lastVisited).toDateString()
          if (lastVisit !== today) {
            // New day, increment counter
            currentDay = (userData.dayCount || 1) + 1
            if (currentDay > 365) currentDay = 1 // Reset after 365 days
          } else {
            // Same day, keep current count
            currentDay = userData.dayCount || 1
          }
        }

        // Update localStorage
        const newUserData = {
          ...userData,
          dayCount: currentDay,
          lastVisited: new Date().toISOString(),
          journalEntries: userData?.journalEntries || [],
        }
        localStorage.setItem("soulspace-data", JSON.stringify(newUserData))

        setDayCount(currentDay)

        // Set quote of the day (cycle through quotes based on day)
        const quoteIndex = (currentDay - 1) % data.quotes.length
        setQuoteOfTheDay(data.quotes[quoteIndex])
      } catch (error) {
        console.error("Error loading quotes:", error)
        setQuoteOfTheDay("Peace begins with a smile.")
      }
    }

    // Load quote of the day from a separate file
    const loadQuoteOfTheDay = async () => {
      try {
        const response = await fetch("/quote-of-the-day.json")
        const data = await response.json()
        // Calculate day count for cycling through quotes
        const today = new Date().toDateString()
        const stored = localStorage.getItem("soulspace-data")
        const userData = stored ? JSON.parse(stored) : null

        let currentDay = 1
        if (userData && userData.lastVisited) {
          const lastVisit = new Date(userData.lastVisited).toDateString()
          if (lastVisit !== today) {
            currentDay = (userData.dayCount || 1) + 1
            if (currentDay > 365) currentDay = 1
          } else {
            currentDay = userData.dayCount || 1
          }
        }
        // Sequential: day 1 → quote 1, day 2 → quote 2, etc.
        const quoteIndex = (currentDay - 1) % data.quotes.length
        setQuoteOfTheDay(data.quotes[quoteIndex])
      } catch (error) {
        setQuoteOfTheDay("Start each day with a positive thought and a grateful heart.")
      }
    }

    loadPeaceQuotes()
    loadQuoteOfTheDay()
  }, [])

  const handleEnterApp = () => {
    setShowWelcome(false)
  }

  if (showWelcome) {
    return <WelcomePage dayCount={dayCount} quoteOfTheDay={quoteOfTheDay} onEnter={handleEnterApp} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Header />
      <MusicPlayer />

      <main className="container mx-auto px-4 py-8 space-y-16">
        <section id="mood-journal">
          <MoodJournal />
        </section>

        <section id="peace-garden">
          <PeaceGarden dayCount={dayCount} />
        </section>

        <section id="peace-jar">
          <PeaceJar />
        </section>
      </main>

      <Footer quoteOfTheDay={quoteOfTheDay} />
    </div>
  )
}
