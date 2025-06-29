import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SoulSpace - Your Peaceful Sanctuary",
  description: "A peaceful sanctuary app for mood journaling, inner growth, and daily affirmations",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Analytics/>
      </body>
    </html>
  )
}
