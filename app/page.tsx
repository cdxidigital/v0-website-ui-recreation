import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"
import { Trending } from "@/components/trending"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Trending />
      <Categories />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  )
}
