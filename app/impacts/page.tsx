import { Header } from "@/components/header"
import { ImpactsSection } from "@/components/impacts-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "PFAS Health & Environmental Impacts | Forever Chemical Effects",
  description: "Discover how PFAS exposure affects human health and ecosystems. Learn about cancer risks, immune suppression, and environmental contamination.",
}

export default function ImpactsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <ImpactsSection />
      <Footer />
    </main>
  )
}
