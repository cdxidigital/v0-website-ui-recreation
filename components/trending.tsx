"use client"

import { Star, MapPin, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-context"
import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function Trending() {
  const { theme } = useTheme()
  const [filters, setFilters] = useState({
    ageRange: [18, 35],
    verified: true,
    availableNow: true,
  })

  const getHoverColor = () => {
    switch (theme) {
      case "male":
        return "hover:text-blue-600"
      case "trans":
        return "hover:text-purple-600"
      default:
        return "hover:text-pink-600"
    }
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Trending Companions Near You</h2>
            <div className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Most booked this week • Available now
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2 rounded-full bg-transparent">
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Companions</SheetTitle>
                  <SheetDescription>Refine your search to find the perfect match.</SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  {/* Age Range */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">
                      Age Range: {filters.ageRange[0]} - {filters.ageRange[1]}
                    </h4>
                    <Slider
                      defaultValue={[18, 35]}
                      max={60}
                      min={18}
                      step={1}
                      onValueChange={(val) => setFilters({ ...filters, ageRange: val })}
                    />
                  </div>

                  {/* Toggles */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="verified" className="flex items-center gap-2">
                        <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                        Verified Only
                      </Label>
                      <Checkbox id="verified" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="available">Available Now</Label>
                      <Checkbox id="available" defaultChecked />
                    </div>
                  </div>

                  {/* Services (Mock) */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Services</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["Dinner Date", "Travel", "Events", "Gaming"].map((s) => (
                        <div key={s} className="flex items-center space-x-2">
                          <Checkbox id={s} />
                          <Label htmlFor={s} className="text-sm font-normal">
                            {s}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit" className="w-full rounded-full bg-black text-white">
                      Apply Filters
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <a
              href="#"
              className={`text-sm font-bold text-gray-900 ${getHoverColor()} transition-colors whitespace-nowrap ml-auto`}
            >
              View All 2,500+ →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden bg-gray-100 aspect-[3/4] cursor-pointer">
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              {/* Placeholder Image Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 group-hover:to-black/80 transition-all" />

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-bold text-lg">Sarah, 24</div>
                  <div className="flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    4.9
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-300 mb-3">
                  <MapPin className="w-3 h-3" />
                  2.5 miles away
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-xs flex flex-wrap gap-1">
                  <span className="bg-white/20 px-2 py-0.5 rounded-full">Travel</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full">Dinner</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
