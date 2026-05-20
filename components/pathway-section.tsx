"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Factory, CloudRain, Waves, Leaf, Fish, Users, Info, ChevronRight, X, Beaker, Globe, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

const pathwayStages = [
  {
    id: 1,
    icon: Factory,
    title: "Industrial Source",
    shortDesc: "Manufacturing & Release",
    color: "from-chart-5 to-chart-5/70",
    bgColor: "bg-chart-5",
    textColor: "text-chart-5",
    chemistry: {
      process: "PFAS Release Mechanisms",
      equations: [
        "Direct discharge: C₈HF₁₅O₂(aq) → Wastewater",
        "Air emissions: C₈F₁₈ → Atmospheric transport",
        "Solid waste: PFAS-containing materials → Landfill leachate"
      ],
      conditions: "Continuous release at manufacturing facilities",
    },
    impact: "Industrial facilities release PFAS through wastewater discharge, air emissions, and solid waste disposal. A single facility can contaminate water supplies for hundreds of thousands of people.",
    example: "The Chemours Company plant in Fayetteville, NC released GenX compounds into the Cape Fear River, contaminating drinking water for over 200,000 residents.",
    data: {
      label: "Annual PFAS Release (US)",
      value: "800,000+ lbs",
      subtext: "EPA TRI Data, 2020"
    }
  },
  {
    id: 2,
    icon: CloudRain,
    title: "Atmospheric Transport",
    shortDesc: "Air & Rain Deposition",
    color: "from-primary to-primary/70",
    bgColor: "bg-primary",
    textColor: "text-primary",
    chemistry: {
      process: "Atmospheric Chemistry",
      equations: [
        "Volatilization: PFAS(l) ⇌ PFAS(g)",
        "Oxidation: FTOHs + OH• → PFCAs",
        "Wet deposition: PFAS(g) + H₂O → PFAS(aq)"
      ],
      conditions: "Temperature, UV radiation, atmospheric oxidants"
    },
    impact: "Volatile PFAS compounds travel hundreds of miles through the atmosphere. Fluorotelomer alcohols (FTOHs) oxidize to form PFOA and other persistent compounds that deposit with rainfall.",
    example: "PFAS have been detected in remote Arctic regions and mountain snow, demonstrating long-range atmospheric transport from industrial sources thousands of miles away.",
    data: {
      label: "Atmospheric Half-life",
      value: "10-20 days",
      subtext: "For volatile precursors"
    }
  },
  {
    id: 3,
    icon: Waves,
    title: "Water Contamination",
    shortDesc: "Groundwater & Surface Water",
    color: "from-chart-1 to-chart-1/70",
    bgColor: "bg-chart-1",
    textColor: "text-chart-1",
    chemistry: {
      process: "Aqueous Transport & Partitioning",
      equations: [
        "Dissolution: PFOS(s) ⇌ PFOS⁻(aq) + H⁺",
        "Adsorption: Kd = [PFAS]soil / [PFAS]water",
        "Bioconcentration: BCF = [PFAS]organism / [PFAS]water"
      ],
      conditions: "pH 6-8, organic carbon content affects sorption"
    },
    impact: "PFAS are highly mobile in water due to their surfactant properties. They contaminate both surface water and groundwater, persisting for decades and spreading far from original release points.",
    example: "Near Pease Air Force Base in Portsmouth, NH, groundwater PFAS levels reached 2,600 ppt—65x higher than EPA health advisory levels.",
    data: {
      label: "Affected Water Systems (US)",
      value: "2,800+",
      subtext: "With detectable PFAS"
    }
  },
  {
    id: 4,
    icon: Leaf,
    title: "Soil Accumulation",
    shortDesc: "Agricultural & Urban Soils",
    color: "from-chart-3 to-chart-3/70",
    bgColor: "bg-chart-3",
    textColor: "text-chart-3",
    chemistry: {
      process: "Soil-Water Partitioning",
      equations: [
        "Sorption: PFAS(aq) + Soil-OC → PFAS-Soil complex",
        "Plant uptake: PFAS(soil) → PFAS(root) → PFAS(shoot)",
        "Leaching: PFAS-Soil + Rain → PFAS(groundwater)"
      ],
      conditions: "Organic matter content, soil pH, clay content affect retention"
    },
    impact: "PFAS bind to organic matter in soil but continue to leach into groundwater over time. Crops grown in contaminated soil can bioaccumulate PFAS, introducing them into the food supply.",
    example: "Farms in Maine using PFAS-contaminated biosolids as fertilizer had to destroy crops and livestock. Some farms showed soil contamination of 1,000+ ppt PFOS.",
    data: {
      label: "Soil Half-life",
      value: ">1,000 years",
      subtext: "No significant degradation"
    }
  },
  {
    id: 5,
    icon: Fish,
    title: "Aquatic Bioaccumulation",
    shortDesc: "Fish & Ecosystem Effects",
    color: "from-chart-4 to-chart-4/70",
    bgColor: "bg-chart-4",
    textColor: "text-chart-4",
    chemistry: {
      process: "Bioaccumulation & Biomagnification",
      equations: [
        "Bioconcentration: BCF = Corganism / Cwater (up to 30,000x)",
        "Trophic transfer: TMF = Cpredator / Cprey (1.5-4x)",
        "Protein binding: PFAS + Albumin → PFAS-Protein"
      ],
      conditions: "Chain length affects bioaccumulation: C8 > C6 > C4"
    },
    impact: "PFAS bioaccumulate in aquatic organisms, with concentrations magnifying up the food chain. Fish at the top of aquatic food webs can have PFAS levels thousands of times higher than the surrounding water.",
    example: "Fish consumption advisories for PFAS have been issued in 23 US states. In some Great Lakes fish, PFOS levels exceed 40,000 ppt.",
    data: {
      label: "Bioaccumulation Factor",
      value: "Up to 30,000x",
      subtext: "In predatory fish species"
    }
  },
  {
    id: 6,
    icon: Users,
    title: "Human Exposure",
    shortDesc: "Health Effects & Biomonitoring",
    color: "from-accent to-accent/70",
    bgColor: "bg-accent",
    textColor: "text-accent",
    chemistry: {
      process: "Human Toxicokinetics",
      equations: [
        "Absorption: PFAS(GI tract) → PFAS(blood) (>90% bioavailable)",
        "Distribution: PFAS + Serum albumin → Tissue accumulation",
        "Elimination t½: PFOA = 2-8 years, PFOS = 4-5 years"
      ],
      conditions: "No metabolism; elimination only via renal excretion"
    },
    impact: "PFAS accumulate in human blood, liver, and kidneys. They cross the placental barrier and are found in breast milk. Health effects include cancer, thyroid disease, immune suppression, and reproductive issues.",
    example: "CDC NHANES data shows 98% of Americans have detectable PFAS in their blood. Communities near contamination sites show serum levels 100x higher than national averages.",
    data: {
      label: "US Population Exposed",
      value: "98%",
      subtext: "With detectable blood levels"
    }
  }
]

export function PathwaySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStage, setActiveStage] = useState<number | null>(null)
  const [hoveredStage, setHoveredStage] = useState<number | null>(null)

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
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Globe className="h-4 w-4" />
            Interactive Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Contamination <span className="text-gradient">Pathway</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Follow the journey of PFAS from industrial release to human exposure. 
            Click any stage to explore the chemistry and real-world impacts.
          </p>
        </motion.div>

        {/* Interactive Pathway - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Connection Line with Flow Animation */}
            <svg className="absolute top-20 left-0 right-0 h-4 z-0" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--chart-5)" />
                  <stop offset="20%" stopColor="var(--primary)" />
                  <stop offset="40%" stopColor="var(--chart-1)" />
                  <stop offset="60%" stopColor="var(--chart-3)" />
                  <stop offset="80%" stopColor="var(--chart-4)" />
                  <stop offset="100%" stopColor="var(--accent)" />
                </linearGradient>
              </defs>
              <motion.rect
                x="8%"
                y="6"
                width="84%"
                height="4"
                rx="2"
                fill="url(#pathGradient)"
                initial={{ scaleX: 0, originX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </svg>

            {/* Stage Nodes */}
            <div className="relative flex items-start justify-between">
              {pathwayStages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative flex flex-col items-center w-[15%]"
                  onMouseEnter={() => setHoveredStage(stage.id)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  <button
                    onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
                    className="relative group focus:outline-none"
                  >
                    {/* Glow effect */}
                    <motion.div
                      className={`absolute inset-0 ${stage.bgColor} rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}
                      animate={activeStage === stage.id ? { opacity: 0.6, scale: 1.2 } : {}}
                    />
                    
                    {/* Icon container */}
                    <motion.div
                      className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg border-4 border-background cursor-pointer`}
                      whileHover={{ scale: 1.15 }}
                      animate={activeStage === stage.id ? { scale: 1.2 } : {}}
                    >
                      <stage.icon className="h-7 w-7 text-background" />
                    </motion.div>

                    {/* Stage number */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${stage.bgColor} flex items-center justify-center text-xs font-bold text-background shadow-md`}>
                      {stage.id}
                    </div>
                  </button>

                  {/* Label */}
                  <motion.div 
                    className="mt-4 text-center"
                    animate={hoveredStage === stage.id || activeStage === stage.id ? { y: -4 } : { y: 0 }}
                  >
                    <p className={`font-semibold text-sm ${stage.textColor}`}>{stage.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 max-w-[120px]">{stage.shortDesc}</p>
                  </motion.div>

                  {/* Preview tooltip on hover */}
                  <AnimatePresence>
                    {hoveredStage === stage.id && activeStage !== stage.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-8 z-20"
                      >
                        <div className="bg-card border border-border rounded-xl p-4 shadow-2xl w-64">
                          <p className="text-sm text-muted-foreground line-clamp-3">{stage.impact}</p>
                          <p className={`text-xs ${stage.textColor} mt-2 font-medium`}>Click to explore details</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Pathway - Mobile */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {pathwayStages.map((stage, index) => (
            <motion.button
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
              className={`relative flex flex-col items-center p-5 rounded-2xl border transition-all ${
                activeStage === stage.id
                  ? `bg-gradient-to-br ${stage.color} border-transparent shadow-lg`
                  : "bg-card/50 border-border hover:border-primary/50 backdrop-blur-sm"
              }`}
            >
              <div className={`absolute top-3 right-3 w-6 h-6 rounded-full ${activeStage === stage.id ? 'bg-background/20' : stage.bgColor} flex items-center justify-center text-xs font-bold ${activeStage === stage.id ? 'text-background' : 'text-background'}`}>
                {stage.id}
              </div>
              <div className={`w-12 h-12 rounded-xl ${activeStage === stage.id ? 'bg-background/20' : `bg-gradient-to-br ${stage.color}`} flex items-center justify-center mb-3`}>
                <stage.icon className={`h-6 w-6 ${activeStage === stage.id ? 'text-background' : 'text-background'}`} />
              </div>
              <span className={`text-sm font-semibold text-center ${activeStage === stage.id ? 'text-background' : stage.textColor}`}>
                {stage.title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Stage Detail Panel */}
        <AnimatePresence mode="wait">
          {activeStage && (
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {(() => {
                const stage = pathwayStages.find(s => s.id === activeStage)!
                return (
                  <div className="relative">
                    {/* Glow background */}
                    <div className={`absolute inset-0 ${stage.bgColor}/10 blur-3xl rounded-3xl`} />
                    
                    <div className="relative bg-card rounded-3xl border border-border shadow-2xl overflow-hidden">
                      {/* Header */}
                      <div className={`relative bg-gradient-to-r ${stage.color} px-6 lg:px-8 py-6`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-background/20 backdrop-blur-sm">
                              <stage.icon className="h-8 w-8 text-background" />
                            </div>
                            <div>
                              <p className="text-background/80 text-sm font-medium">Stage {stage.id} of 6</p>
                              <h3 className="text-2xl font-bold text-background">{stage.title}</h3>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setActiveStage(null)}
                            className="text-background hover:bg-background/20 rounded-full"
                          >
                            <X className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 lg:p-8">
                        <div className="grid lg:grid-cols-3 gap-8">
                          {/* Chemistry Panel */}
                          <div className="lg:col-span-1">
                            <div className="bg-muted/30 rounded-2xl p-6 h-full border border-border">
                              <div className="flex items-center gap-2 mb-4">
                                <Beaker className="h-5 w-5 text-primary" />
                                <h4 className="font-bold text-foreground">{stage.chemistry.process}</h4>
                              </div>
                              <div className="space-y-3">
                                {stage.chemistry.equations.map((eq, i) => (
                                  <div key={i} className="font-mono text-sm text-muted-foreground bg-card/50 px-4 py-3 rounded-xl border border-border">
                                    {eq}
                                  </div>
                                ))}
                              </div>
                              <div className="mt-4 pt-4 border-t border-border">
                                <p className="text-xs text-muted-foreground">
                                  <span className="font-semibold text-foreground">Conditions:</span> {stage.chemistry.conditions}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Impact & Example */}
                          <div className="lg:col-span-2 space-y-6">
                            <div>
                              <h4 className="font-bold text-foreground mb-3 text-lg">Environmental Impact</h4>
                              <p className="text-muted-foreground leading-relaxed text-lg">{stage.impact}</p>
                            </div>

                            <div className={`bg-gradient-to-r from-${stage.textColor.replace('text-', '')}/5 to-transparent border border-${stage.textColor.replace('text-', '')}/20 rounded-2xl p-6`}>
                              <div className="flex items-start gap-4">
                                <div className={`p-2 rounded-lg ${stage.bgColor}/10`}>
                                  <Info className={`h-5 w-5 ${stage.textColor}`} />
                                </div>
                                <div>
                                  <h4 className="font-bold text-foreground mb-2">Real-World Case Study</h4>
                                  <p className="text-muted-foreground leading-relaxed">{stage.example}</p>
                                </div>
                              </div>
                            </div>

                            {/* Data Card */}
                            <div className="flex items-center gap-6 p-6 bg-muted/20 rounded-2xl border border-border">
                              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                <span className="text-3xl font-bold text-background">{stage.id}</span>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">{stage.data.label}</p>
                                <p className="text-3xl font-bold text-foreground">{stage.data.value}</p>
                                <p className="text-xs text-muted-foreground mt-1">{stage.data.subtext}</p>
                              </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex justify-between pt-4">
                              <Button
                                variant="outline"
                                onClick={() => setActiveStage(stage.id > 1 ? stage.id - 1 : 6)}
                                className="border-border hover:bg-muted"
                              >
                                <ChevronRight className="h-4 w-4 mr-2 rotate-180" />
                                Previous Stage
                              </Button>
                              <Button
                                onClick={() => setActiveStage(stage.id < 6 ? stage.id + 1 : 1)}
                                className={`bg-gradient-to-r ${stage.color} text-background hover:opacity-90`}
                              >
                                Next Stage
                                <ChevronRight className="h-4 w-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action if nothing selected */}
        {!activeStage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 border border-border text-muted-foreground">
              <AlertTriangle className="h-4 w-4 text-accent" />
              <span>Select any stage above to explore the contamination pathway in detail</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
