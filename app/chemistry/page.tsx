import { Header } from "@/components/header"
import { ChemistrySection } from "@/components/chemistry-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "PFAS Chemistry | Understanding Carbon-Fluorine Bonds",
  description: "Explore the chemistry of PFAS compounds, including PFOA, PFOS, and GenX. Learn why carbon-fluorine bonds make these forever chemicals so persistent.",
}

export default function ChemistryPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <ChemistrySection />
      <Footer />
    </main>
  )
}
