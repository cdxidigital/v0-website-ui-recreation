"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown } from "lucide-react"
import { useState } from "react"
import { useTheme } from "@/components/theme-context"

const plans = [
  {
    name: "Basic Listing",
    description: "Perfect for new or budget-conscious companions",
    price: "$0",
    period: "Forever Free",
    popular: false,
    features: [
      "Profile visible in one city/category",
      "Up to 5 photos in gallery",
      "Appear in standard search results",
      "Inbound inquiries via messaging",
      "Basic profile stats (views, clicks)",
      'Free verification with "Verified" badge',
    ],
  },
  {
    name: "Premium Listing",
    description: "Boost visibility and attract more clients",
    price: "$49",
    period: "per month",
    popular: true,
    savings: "Save 20% with annual plan ($470/year)",
    features: [
      "All Basic features +",
      "Profile visible across 5 cities",
      "Priority placement in search results",
      "Up to 15 photos + video upload",
      "Enhanced profile analytics",
      "Messaging priority & email alerts",
      "Featured in city guides",
      "Monthly support calls available",
    ],
  },
  {
    name: "Elite Package",
    description: "Maximum visibility and premium features",
    price: "$99",
    period: "per month",
    popular: false,
    savings: "Save 25% with annual plan ($890/year)",
    features: [
      "All Premium features +",
      "Nationwide or multi-country visibility",
      "Homepage featured placement",
      "Unlimited photos & video uploads",
      "Advanced booking analytics & insights",
      "Priority 24/7 support",
      "Custom profile branding",
      "Social media promotion",
      "Weekly featured spots",
    ],
  },
]

const comparisonFeatures = [
  { feature: "Profile Visibility", basic: "1 city", premium: "5 cities", elite: "Nationwide" },
  { feature: "Photos Allowed", basic: "5", premium: "15", elite: "Unlimited" },
  { feature: "Video Upload", basic: "No", premium: "Yes", elite: "Yes" },
  { feature: "Search Placement", basic: "Standard", premium: "Priority", elite: "Featured" },
  { feature: "Analytics", basic: "Basic", premium: "Enhanced", elite: "Advanced" },
  { feature: "Email Alerts", basic: "No", premium: "Yes", elite: "Yes" },
  { feature: "24/7 Support", basic: "No", premium: "Business hours", elite: "Yes" },
  { feature: "Verification Badge", basic: "Yes", premium: "Yes", elite: "Yes" },
]

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your monthly subscription anytime. Annual plans can be cancelled with 30 days notice.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express) and bank transfers for annual subscriptions.",
  },
  {
    question: "Is there a difference in commission rates for different tiers?",
    answer:
      "No, our platform commission remains consistent. Paid tiers increase visibility and features, not pricing benefits.",
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer: "Absolutely. Changes take effect immediately and we'll adjust your billing accordingly.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Monthly subscriptions come with a 7-day money-back guarantee. Annual plans are non-refundable but can be canceled with 30 days notice.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees. Your first payment begins immediately upon subscription activation.",
  },
]

export default function PricingPage() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState<"companions" | "advertisers">("companions")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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

  const getBorderColor = () => {
    switch (theme) {
      case "male":
        return "border-blue-600"
      case "trans":
        return "border-purple-600"
      default:
        return "border-pink-600"
    }
  }

  const getTextColor = () => {
    switch (theme) {
      case "male":
        return "text-blue-600"
      case "trans":
        return "text-purple-600"
      default:
        return "text-pink-600"
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Affordable, feature-rich packages for companions and advertisers. No hidden fees.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="container mx-auto px-4 -mt-6">
        <div className="flex justify-center">
          <div className="inline-flex bg-white rounded-full shadow-lg border border-gray-100 p-1">
            <button
              onClick={() => setActiveTab("companions")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "companions" ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              For Companions
            </button>
            <button
              onClick={() => setActiveTab("advertisers")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "advertisers" ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              For Advertisers
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-6 border-2 ${
                  plan.popular ? getBorderColor() : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 ${getAccentColor()} text-white text-xs font-bold px-4 py-1 rounded-full`}
                  >
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>

                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>

                {plan.savings && <p className={`text-sm ${getTextColor()} mb-4`}>{plan.savings}</p>}

                <Button
                  className={`w-full mb-6 rounded-lg ${
                    plan.popular ? `${getAccentColor()} text-white` : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  {plan.price === "$0" ? "Get Started" : "Upgrade Now"}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${getTextColor()}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Feature Comparison</h2>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden border border-gray-100">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Basic</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Premium</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50">
                    <td className="p-4 text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="p-4 text-sm text-center text-gray-600">{row.basic}</td>
                    <td className={`p-4 text-sm text-center ${getTextColor()}`}>{row.premium}</td>
                    <td className={`p-4 text-sm text-center ${getTextColor()}`}>{row.elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-sm text-gray-600">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Grow Your Business?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join thousands of companions earning more with WhoreDash's superior visibility and support
          </p>
          <Button className={`${getAccentColor()} text-white rounded-full px-8 py-6 text-lg font-medium`}>
            Get Started Today →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
