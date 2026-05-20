"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Atom, Beaker, ThermometerSun, Info, Zap, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChemistrySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCompound, setActiveCompound] = useState<'pfoa' | 'pfos' | 'genx'>('pfoa')

  const compounds = {
    pfoa: {
      name: "PFOA (Perfluorooctanoic Acid)",
      formula: "C₈HF₁₅O₂",
      structure: "CF₃(CF₂)₆COOH",
      molecularWeight: "414.07 g/mol",
      description: "One of the most studied PFAS compounds. Used historically in non-stick cookware (Teflon) manufacturing. The 8-carbon chain with 15 fluorine atoms creates exceptional stability.",
      properties: [
        "Water solubility: 9.5 g/L at 25°C",
        "Vapor pressure: 0.017 Pa at 25°C",
        "Half-life in humans: 2-8 years",
        "pKa: 0.5 (strong acid)"
      ],
      concerns: "Classified as possibly carcinogenic (IARC Group 2B). Linked to kidney cancer, testicular cancer, and thyroid disease.",
      color: "primary"
    },
    pfos: {
      name: "PFOS (Perfluorooctane Sulfonic Acid)",
      formula: "C₈HF₁₇O₃S",
      structure: "CF₃(CF₂)₇SO₃H",
      molecularWeight: "500.13 g/mol",
      description: "Used in firefighting foams (AFFF) and stain-resistant treatments. The sulfonic acid group makes it even more persistent than PFOA in biological systems.",
      properties: [
        "Water solubility: 0.57 g/L at 25°C",
        "Vapor pressure: 3.31 × 10⁻⁴ Pa",
        "Half-life in humans: 4-5 years",
        "pKa: -3.27 (superacid)"
      ],
      concerns: "Highly bioaccumulative. Can accumulate to concentrations 30,000x higher in fish than in surrounding water.",
      color: "accent"
    },
    genx: {
      name: "GenX (HFPO-DA)",
      formula: "C₆HF₁₁O₃",
      structure: "CF₃CF₂CF₂OCF(CF₃)COOH",
      molecularWeight: "330.05 g/mol",
      description: "Replacement compound for PFOA. Has an ether linkage that was thought to make it less bioaccumulative, but studies show it still poses significant risks.",
      properties: [
        "Water solubility: High",
        "Shorter carbon chain",
        "Half-life in humans: ~2.5 hours",
        "Still contains strong C-F bonds"
      ],
      concerns: "Despite shorter half-life in blood, causes liver toxicity, kidney damage, and developmental effects in studies. Detected in drinking water near manufacturing sites.",
      color: "chart-3"
    }
  }

  const current = compounds[activeCompound]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Understanding <span className="text-gradient">PFAS Chemistry</span>
          </h2>
        </motion.div>

        {/* Carbon-Fluorine Bond Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-3xl" />
          <div className="relative bg-card rounded-3xl border border-border p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">The Carbon-Fluorine Bond</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  The C-F bond has a <strong className="text-primary">bond dissociation energy of 485 kJ/mol</strong>—making it 
                  one of the strongest single bonds in organic chemistry. This exceptional stability comes from:
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  {[
                    "Fluorine's high electronegativity (3.98) creating strong polar bonds",
                    "Small atomic radius of fluorine allowing tight orbital overlap",
                    "Fluorine's lone pairs repelling potential attacking molecules"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Bond Energy Visualization */}
              <div className="bg-muted/30 rounded-2xl p-6 lg:p-8 border border-border">
                <h4 className="font-bold text-foreground mb-6 text-center text-lg">Bond Dissociation Energies (kJ/mol)</h4>
                <div className="space-y-5">
                  {[
                    { bond: "C-F", energy: 485, color: "from-accent to-accent/70", width: "100%" },
                    { bond: "C-H", energy: 411, color: "from-chart-4 to-chart-4/70", width: "85%" },
                    { bond: "C-O", energy: 358, color: "from-primary to-primary/70", width: "74%" },
                    { bond: "C-C", energy: 346, color: "from-chart-1 to-chart-1/70", width: "71%" },
                    { bond: "C-Cl", energy: 327, color: "from-chart-3 to-chart-3/70", width: "67%" },
                  ].map((item, index) => (
                    <div key={item.bond} className="flex items-center gap-4">
                      <span className="font-mono text-sm text-foreground w-12 font-bold">{item.bond}</span>
                      <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: item.width } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full flex items-center justify-end pr-3`}
                        >
                          <span className="text-sm font-bold text-background">{item.energy}</span>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground text-center mt-6 pt-4 border-t border-border">
                  The C-F bond is <span className="text-accent font-semibold">18% stronger</span> than C-H and <span className="text-accent font-semibold">48% stronger</span> than C-Cl
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Compound Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Explore PFAS Compounds
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {(['pfoa', 'pfos', 'genx'] as const).map((compound) => (
              <Button
                key={compound}
                variant={activeCompound === compound ? "default" : "outline"}
                onClick={() => setActiveCompound(compound)}
                size="lg"
                className={`min-w-[120px] ${activeCompound === compound ? 'glow-primary' : 'border-border hover:border-primary/50'}`}
              >
                {compound.toUpperCase()}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Compound Detail Card */}
        <motion.div
          key={activeCompound}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <div className={`absolute inset-0 bg-${current.color}/10 blur-3xl rounded-3xl`} />
          <div className="relative bg-card rounded-3xl border border-border overflow-hidden">
            <div className="p-8 lg:p-10">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Structure Display */}
                <div className="lg:col-span-1">
                  <div className="bg-muted/30 rounded-2xl p-6 text-center h-full border border-border flex flex-col justify-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${current.color}/20 to-${current.color}/5 border border-${current.color}/20 flex items-center justify-center mx-auto mb-6`}>
                      <Beaker className={`h-10 w-10 text-${current.color}`} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Chemical Formula</h4>
                    <p className={`font-mono text-3xl text-${current.color} mb-6`}>{current.formula}</p>
                    <h4 className="font-semibold text-foreground mb-2">Structure</h4>
                    <p className="font-mono text-lg text-muted-foreground break-all">{current.structure}</p>
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground">Molecular Weight</p>
                      <p className="font-bold text-xl text-foreground">{current.molecularWeight}</p>
                    </div>
                  </div>
                </div>

                {/* Description and Properties */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{current.name}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{current.description}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-2xl p-5 border border-border">
                      <div className="flex items-center gap-2 mb-4">
                        <ThermometerSun className="h-5 w-5 text-primary" />
                        <h4 className="font-bold text-foreground">Physical Properties</h4>
                      </div>
                      <ul className="space-y-3">
                        {current.properties.map((prop, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {prop}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="h-5 w-5 text-accent" />
                        <h4 className="font-bold text-foreground">Health Concerns</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{current.concerns}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reaction Conditions Banner */}
            <div className="bg-muted/30 px-8 lg:px-10 py-6 border-t border-border">
              <div className="flex items-start gap-4">
                <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-2">Degradation Reaction (Under Extreme Conditions)</h4>
                  <div className="font-mono text-sm text-muted-foreground bg-card px-4 py-3 rounded-xl border border-border overflow-x-auto">
                    <span className="text-primary">{current.formula}</span>
                    {" → "}
                    <span className="text-chart-3">CO₂</span> + <span className="text-chart-1">HF</span> + <span className="text-chart-4">H₂O</span>
                    <span className="ml-4 text-accent">(Conditions: {">"}1000°C incineration or electrochemical oxidation)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
