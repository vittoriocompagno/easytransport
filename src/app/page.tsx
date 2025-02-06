import { HeroSection } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Industries } from "@/components/sections/industries"
import { Calculator } from "@/components/sections/calculator"
import { AboutUs } from "@/components/sections/about"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <Features />
      <Calculator />
      <Industries />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
      <MobileNav />
    </main>
  )
}
