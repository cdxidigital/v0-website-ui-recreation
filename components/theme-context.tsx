"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Theme = "all" | "female" | "male" | "trans" | "nonbinary"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  themeColors: {
    primary: string
    primaryHover: string
    accent: string
    gradient: string
    ring: string
    badge: string
  }
}

const themeColorMap = {
  all: {
    primary: "bg-pink-500",
    primaryHover: "hover:bg-pink-600",
    accent: "bg-purple-500",
    gradient: "from-pink-500 to-purple-500",
    ring: "ring-pink-500",
    badge: "bg-pink-500/20 text-pink-400 border-pink-400/30",
  },
  female: {
    primary: "bg-pink-500",
    primaryHover: "hover:bg-pink-600",
    accent: "bg-rose-500",
    gradient: "from-pink-500 to-rose-500",
    ring: "ring-pink-500",
    badge: "bg-pink-500/20 text-pink-400 border-pink-400/30",
  },
  male: {
    primary: "bg-blue-500",
    primaryHover: "hover:bg-blue-600",
    accent: "bg-cyan-500",
    gradient: "from-blue-500 to-cyan-500",
    ring: "ring-blue-500",
    badge: "bg-blue-500/20 text-blue-400 border-blue-400/30",
  },
  trans: {
    primary: "bg-sky-400",
    primaryHover: "hover:bg-sky-500",
    accent: "bg-pink-400",
    gradient: "from-sky-400 via-pink-300 to-sky-400",
    ring: "ring-sky-400",
    badge: "bg-sky-400/20 text-sky-400 border-sky-400/30",
  },
  nonbinary: {
    primary: "bg-yellow-500",
    primaryHover: "hover:bg-yellow-600",
    accent: "bg-purple-500",
    gradient: "from-yellow-400 via-white to-purple-500",
    ring: "ring-yellow-500",
    badge: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30",
  },
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("all")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("companion-theme") as Theme | null
    if (savedTheme && ["all", "female", "male", "trans", "nonbinary"].includes(savedTheme)) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove("theme-all", "theme-female", "theme-male", "theme-trans", "theme-nonbinary")
    root.classList.add(`theme-${theme}`)

    localStorage.setItem("companion-theme", theme)
  }, [theme, mounted])

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem("companion-theme", newTheme)
  }

  const themeColors = themeColorMap[theme]

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, themeColors }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
