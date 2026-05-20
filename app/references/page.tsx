import { Header } from "@/components/header"
import { ReferencesSection } from "@/components/references-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "PFAS Research References | Scientific Citations",
  description: "Access peer-reviewed research and scientific sources about PFAS contamination, health effects, and environmental impacts.",
}

export default function ReferencesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <ReferencesSection />
      <Footer />
    </main>
  )
}
