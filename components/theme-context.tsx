"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Theme = "all" | "female" | "male" | "trans"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("all")

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("theme-all", "theme-female", "theme-male", "theme-trans")
    root.classList.add(`theme-${theme}`)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
