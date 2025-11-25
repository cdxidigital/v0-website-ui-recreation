"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { useTheme } from "@/components/theme-context"

const opportunityCards = [
  {
    title: "Ad & Listing Platform",
    subtitle: "Core Model",
    description: "Premium escort listing platform with no transaction handling = lower legal & financial exposure",
    color: "text-pink-600",
  },
  {
    title: "Revenue Streams",
    subtitle: "Multiple Income Sources",
    description: "Monthly listing fees, featured upgrades, subscriptions, affiliate partnerships",
    color: "text-blue-600",
  },
  {
    title: "Lean Operations",
    subtitle: "Capital Efficient",
    description: "No payment infrastructure = minimal compliance overhead & faster scaling",
    color: "text-cyan-600",
  },
]

const financialMetrics = [
  { value: "$788K", label: "Year 3 Revenue", sub: "Base case projection" },
  { value: "~30%", label: "EBITDA Margin", sub: "Highly profitable" },
  { value: "$2.4M", label: "Est. Valuation", sub: "At 3x revenue multiple" },
  { value: "100%", label: "Profitable by Y3", sub: "Across all scenarios" },
]

const revenueStreams = [
  { title: "15%", subtitle: "Platform Commission", desc: "15% commission on every booking with $25-30 platform fee" },
  {
    title: "PRO",
    subtitle: "Premium Subscriptions",
    desc: "$9.99-29.99/month for professionals with enhanced visibility",
  },
  { title: "API", subtitle: "White Label & API", desc: "Enterprise partnerships and B2B API access licensing" },
]

const advantages = [
  {
    title: "Legally Safer Model",
    points: [
      "No transaction handling reduces legal exposure",
      "Listing platform = compliant marketplace model",
      "Minimal payment processor dependencies",
    ],
    checkmarks: false,
  },
  {
    title: "Scalable Growth",
    points: [
      "Low infrastructure costs < 30% margins",
      "Recurring revenue from subscriptions",
      "White-label licensing for global expansion",
    ],
    checkmarks: true,
  },
  {
    title: "Fleshsesh Synergy",
    points: [
      "Brand synergy powers rapid adoption",
      "Cross-promotion with existing user base",
      "Combined ecosystem creates network effects",
    ],
    checkmarks: true,
  },
  {
    title: "Premium Positioning",
    points: [
      "SEO authority drives organic traffic",
      "Premium upsells & loyalty programs",
      "Recurring advertiser revenue streams",
    ],
    checkmarks: true,
  },
]

const timeline = [
  { year: "2024", milestone: "Launch", users: "500K Users", revenue: "$2.5M Revenue" },
  { year: "2025", milestone: "Series A", users: "2.5M Users", revenue: "$15M Revenue" },
  { year: "2026", milestone: "Expansion", users: "8M Users", revenue: "$50M Revenue" },
  { year: "2027", milestone: "IPO Ready", users: "20M Users", revenue: "$125M Revenue" },
]

const capitalUse = [
  { label: "Technology & Development", percentage: 35, color: "bg-pink-500" },
  { label: "Marketing & Acquisition", percentage: 30, color: "bg-blue-500" },
  { label: "Operations & Compliance", percentage: 20, color: "bg-purple-500" },
  { label: "Team & Infrastructure", percentage: 15, color: "bg-cyan-500" },
]

export default function InvestorsPage() {
  const { theme } = useTheme()

  const getAccentColor = () => {
    switch (theme) {
      case "male":
        return "bg-blue-600 hover:bg-blue-700"
      case "trans":
        return "bg-purple-600 hover:bg-purple-700"
      default:
        return "bg-pink-600 hover:bg-pink-700"
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment Opportunity</h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join a rapidly growing marketplace connecting professionals with verified clients globally
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className={`${getAccentColor()} text-white rounded-lg px-6`}>Download Pitch Deck</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 rounded-lg px-6 bg-transparent"
            >
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">The WhoreDash Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {opportunityCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 className={`text-lg font-bold ${card.color} mb-1`}>{card.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{card.subtitle}</p>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Year Financial Forecast */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">3-Year Financial Forecast</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {financialMetrics.map((metric, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="text-3xl font-bold text-pink-600 mb-1">{metric.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-500">{metric.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Revenue Streams</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {revenueStreams.map((stream, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-2xl font-bold text-pink-600 mb-1">{stream.title}</div>
                <div className="text-sm font-semibold text-gray-900 mb-2">{stream.subtitle}</div>
                <p className="text-sm text-gray-600">{stream.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Competitive Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Strategic Competitive Advantages</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advantages.map((adv, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">{adv.title}</h3>
                <ul className="space-y-2">
                  {adv.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      {adv.checkmarks ? (
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                      )}
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Trajectory */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Growth Trajectory</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">{item.year}</div>
                <div className="text-lg font-bold text-gray-900 mb-3">{item.milestone}</div>
                <div className="text-sm text-pink-600 font-medium">{item.users}</div>
                <div className="text-sm text-gray-600">{item.revenue}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use of Capital */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Use of Capital</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {capitalUse.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">{item.label}</span>
                  <span className="text-sm text-gray-500">{item.percentage}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Invest?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join leading investors in revolutionizing the companion services marketplace
          </p>
          <Button className={`${getAccentColor()} text-white rounded-lg px-8 py-6 text-lg font-medium`}>
            Schedule Investor Call <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
