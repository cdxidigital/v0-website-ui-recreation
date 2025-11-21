import { Check, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Transparent Pricing for</h2>
          <p className="text-gray-500">No hidden fees, no surprises - just clear, upfront pricing</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Client Pricing */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-pink-500 font-bold mb-6">
              <DollarSign className="w-5 h-5" />
              Transparent Pricing
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-pink-100 rounded-xl p-4 text-center bg-pink-50/30">
                <div className="text-pink-600 font-bold text-xl mb-1">$200-800</div>
                <div className="text-xs text-gray-500">Per Hour Range</div>
              </div>
              <div className="border border-gray-100 rounded-xl p-4 text-center">
                <div className="text-gray-900 font-bold text-xl mb-1">$350</div>
                <div className="text-xs text-gray-500">Average Rate</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Booking Fee</span>
                <span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded text-xs font-medium">$25</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Platform Service Fee</span>
                <span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded text-xs font-medium">15%</span>
              </div>
              <div className="flex justify-between items-center text-sm mb-6">
                <span className="text-gray-600">Payment Processing</span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">Free</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-100">
                {["Secure payment processing", "Free cancellation up to 30 min before", "100% verified companions"].map(
                  (item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500" />
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Companion Earnings */}
          <div className="bg-pink-50 rounded-2xl p-8 border border-pink-100 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Start Earning as a Premium Companion</h3>
              <p className="text-sm text-gray-500 mb-8">Join 10,000+ verified companions earning top rates</p>

              <div className="grid grid-cols-3 gap-2 mb-8">
                <div className="text-center">
                  <div className="text-pink-600 font-bold text-lg">$3,500</div>
                  <div className="text-[10px] text-gray-500 leading-tight">Average Monthly</div>
                </div>
                <div className="text-center border-l border-pink-200">
                  <div className="text-pink-600 font-bold text-lg">$12,000</div>
                  <div className="text-[10px] text-gray-500 leading-tight">Top Earners</div>
                </div>
                <div className="text-center border-l border-pink-200">
                  <div className="text-pink-600 font-bold text-lg">85%</div>
                  <div className="text-[10px] text-gray-500 leading-tight">Booking Rate</div>
                </div>
              </div>

              <div className="mb-2 text-sm font-bold text-gray-900">What You Get:</div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-8">
                {[
                  "Instant bookings & payments",
                  "24/7 safety support & monitoring",
                  "Professional photo shoots",
                  "Marketing & promotion tools",
                  "Weekly payouts via direct deposit",
                  "Flexible scheduling & location control",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                    <div className="w-1 h-1 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-lg py-6 font-bold shadow-lg shadow-pink-200">
                Start Your Application
              </Button>
              <div className="text-[10px] text-center text-gray-400 mt-3">
                Quick approval process • Background check included • Start earning in 48 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
