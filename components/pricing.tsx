"use client"

import { DollarSign, TrendingUp, Users, CheckCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-context"

export function Pricing() {
  const { theme } = useTheme()

  const getAccentColor = () => {
    switch (theme) {
      case "female":
        return "text-pink-400"
      case "male":
        return "text-blue-400"
      case "trans":
        return "text-sky-400"
      case "nonbinary":
        return "text-yellow-400"
      default:
        return "text-pink-400"
    }
  }

  const getButtonClass = () => {
    switch (theme) {
      case "female":
        return "bg-pink-500 hover:bg-pink-600"
      case "male":
        return "bg-blue-500 hover:bg-blue-600"
      case "trans":
        return "bg-gradient-to-r from-sky-400 to-pink-400 hover:from-sky-500 hover:to-pink-500"
      case "nonbinary":
        return "bg-gradient-to-r from-yellow-400 to-purple-500 hover:from-yellow-500 hover:to-purple-600"
      default:
        return "bg-pink-500 hover:bg-pink-600"
    }
  }

  const getIconBgClass = (type: string) => {
    switch (theme) {
      case "female":
        return type === "dollar" ? "bg-pink-100" : type === "calendar" ? "bg-purple-100" : "bg-green-100"
      case "male":
        return type === "dollar" ? "bg-blue-100" : type === "calendar" ? "bg-cyan-100" : "bg-green-100"
      case "trans":
        return type === "dollar" ? "bg-sky-100" : type === "calendar" ? "bg-pink-100" : "bg-green-100"
      case "nonbinary":
        return type === "dollar" ? "bg-yellow-100" : type === "calendar" ? "bg-purple-100" : "bg-green-100"
      default:
        return type === "dollar" ? "bg-pink-100" : type === "calendar" ? "bg-purple-100" : "bg-green-100"
    }
  }

  const getIconTextClass = (type: string) => {
    switch (theme) {
      case "female":
        return type === "dollar" ? "text-pink-600" : type === "calendar" ? "text-purple-600" : "text-green-600"
      case "male":
        return type === "dollar" ? "text-blue-600" : type === "calendar" ? "text-cyan-600" : "text-green-600"
      case "trans":
        return type === "dollar" ? "text-sky-500" : type === "calendar" ? "text-pink-500" : "text-green-600"
      case "nonbinary":
        return type === "dollar" ? "text-yellow-600" : type === "calendar" ? "text-purple-600" : "text-green-600"
      default:
        return type === "dollar" ? "text-pink-600" : type === "calendar" ? "text-purple-600" : "text-green-600"
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Transparent Pricing for Beautiful Companions</h2>
          <p className="text-gray-500">No hidden fees, no surprises - just clear, upfront pricing</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 ${getIconBgClass("dollar")} rounded-full flex items-center justify-center transition-colors duration-300`}
                >
                  <DollarSign className={`w-6 h-6 ${getIconTextClass("dollar")} transition-colors duration-300`} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Transparent Pricing</h3>
                  <p className="text-sm text-gray-500">No hidden fees - just clear, upfront pricing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 ${getIconBgClass("calendar")} rounded-full flex items-center justify-center transition-colors duration-300`}
                >
                  <Calendar className={`w-6 h-6 ${getIconTextClass("calendar")} transition-colors duration-300`} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Flexible Bookings</h3>
                  <p className="text-sm text-gray-500">Book by the hour, day, or custom arrangements</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${getIconBgClass("check")} rounded-full flex items-center justify-center`}>
                  <CheckCircle className={`w-6 h-6 ${getIconTextClass("check")}`} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Secure Payments</h3>
                  <p className="text-sm text-gray-500">All transactions processed securely and discreetly</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Companion Benefits</h3>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-3">
                  <TrendingUp
                    className={`w-5 h-5 ${getAccentColor()} mt-0.5 shrink-0 transition-colors duration-300`}
                  />
                  <div>
                    <div className="font-semibold mb-1">Average Earnings</div>
                    <div className={`text-3xl font-bold ${getAccentColor()} transition-colors duration-300`}>
                      $5,000/mo
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className={`w-5 h-5 ${getAccentColor()} mt-0.5 shrink-0 transition-colors duration-300`} />
                  <div>
                    <div className="font-semibold mb-1">50,000+ Active Clients</div>
                    <div className="text-sm text-gray-300">Large client base to reach</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className={`w-5 h-5 ${getAccentColor()} mt-0.5 shrink-0 transition-colors duration-300`} />
                  <div>
                    <div className="font-semibold mb-1">Flexible Scheduling</div>
                    <div className="text-sm text-gray-300">Set your own availability and rates</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle
                    className={`w-5 h-5 ${getAccentColor()} mt-0.5 shrink-0 transition-colors duration-300`}
                  />
                  <div>
                    <div className="font-semibold mb-1">Verified Performers</div>
                    <div className="text-sm text-gray-300">Background checks & safety protocols</div>
                  </div>
                </div>
              </div>

              <Button
                className={`w-full ${getButtonClass()} text-white rounded-xl py-6 text-lg font-bold shadow-xl transition-all duration-300`}
              >
                Apply to Join
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
