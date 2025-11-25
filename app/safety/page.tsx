"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useTheme } from "@/components/theme-context"
import { Shield, Phone, Heart, Users, BookOpen, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SafetyPage() {
  const { theme } = useTheme()

  const getThemeColor = () => {
    switch (theme) {
      case "male":
        return "bg-blue-600"
      case "trans":
        return "bg-purple-600"
      case "nonbinary":
        return "bg-yellow-500"
      default:
        return "bg-pink-600"
    }
  }

  const getTextColor = () => {
    switch (theme) {
      case "male":
        return "text-blue-600"
      case "trans":
        return "text-purple-600"
      case "nonbinary":
        return "text-yellow-600"
      default:
        return "text-pink-600"
    }
  }

  const resources = [
    {
      icon: Shield,
      title: "Emergency Support",
      description:
        "24/7 rapid response team for urgent situations. Press the panic button in your dashboard or call our hotline.",
      action: "Call Now: 1-800-SAFE-NOW",
    },
    {
      icon: Heart,
      title: "Mental Health Resources",
      description: "Access free counseling, peer support groups, and wellness check-ins with licensed professionals.",
      action: "Book a Session",
    },
    {
      icon: BookOpen,
      title: "Legal Support Hub",
      description: "Connect with legal experts familiar with companion rights, contracts, and regulatory compliance.",
      action: "Get Legal Help",
    },
    {
      icon: Users,
      title: "Community Guidelines",
      description:
        "Read our comprehensive guidelines on respectful interactions, consent, and professional boundaries.",
      action: "Read Guidelines",
    },
  ]

  const safetyTips = [
    "Always verify client identity before meeting",
    "Share your booking details with a trusted contact",
    "Meet in public locations for initial consultations",
    "Trust your instincts - you can decline any booking",
    "Keep your personal contact info private",
    "Use the in-app communication system",
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className={`${getThemeColor()} text-white py-24 pt-32 transition-colors duration-300`}>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Shield className="w-20 h-20 mx-auto mb-6 animate-float" strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Safety Center</h1>
          <p className="text-xl text-white/90 leading-relaxed animate-fadeInUp stagger-1">
            Your wellbeing is our priority. Access emergency support, mental health resources, legal guidance, and
            community guidelines all in one place.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-50 border-y border-red-200 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-red-900 mb-1">In immediate danger?</h3>
              <p className="text-red-800 mb-3">
                If you are in an emergency situation, call local emergency services immediately or use the panic button
                in your companion dashboard.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-red-600 hover:bg-red-700 text-white btn-press">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Hotline
                </Button>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
                  Local Emergency Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Wellbeing Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, i) => {
              const Icon = resource.icon
              return (
                <div
                  key={resource.title}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover animate-fadeInUp"
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <Icon
                    className={`w-12 h-12 ${getTextColor()} mb-4 transition-colors duration-300`}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>
                  <Button className={`${getThemeColor()} text-white btn-press transition-colors duration-300`}>
                    {resource.action}
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Safety Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {safetyTips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg animate-fadeInUp"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div
                  className={`w-6 h-6 rounded-full ${getThemeColor()} text-white flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors duration-300`}
                >
                  {index + 1}
                </div>
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Way Rating */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Two-Way Rating System</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your voice matters. Rate clients after each booking to help build a safer community. Clients with
              consistently low ratings may have their accounts reviewed or suspended.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className={`${getThemeColor()} text-white btn-press transition-colors duration-300`}>
                View Rating Guide
              </Button>
              <Button variant="outline" className="bg-transparent">
                Report a Client
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
