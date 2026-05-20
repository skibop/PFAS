import { Header } from "@/components/header"
import { SolutionsSection } from "@/components/solutions-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "PFAS Solutions | Regulatory & Technological Approaches",
  description: "Explore global solutions to the PFAS crisis including EU restrictions, EPA regulations, filtration technologies, and destruction methods.",
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <SolutionsSection />
      <Footer />
    </main>
  )
}
