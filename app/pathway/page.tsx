import { Header } from "@/components/header"
import { PathwaySection } from "@/components/pathway-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "PFAS Contamination Pathway | From Industry to Human Exposure",
  description: "Follow the six-stage journey of PFAS contamination from industrial sources through atmospheric transport, water contamination, soil accumulation, to human exposure.",
}

export default function PathwayPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <PathwaySection />
      <Footer />
    </main>
  )
}
