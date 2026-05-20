"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Globe, Building, FlaskConical, Leaf, CheckCircle2, XCircle, Star, ArrowRight, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    id: "eu",
    type: "government",
    icon: Globe,
    name: "European Union",
    approach: "Universal PFAS Restriction",
    description: "The EU has proposed a comprehensive ban on PFAS under REACH regulation—the most extensive chemical regulation in history.",
    actions: [
      "Universal restriction covering all 10,000+ PFAS compounds",
      "Phase-out timeline of 18 months to 13.5 years",
      "Strict drinking water limit of 100 ng/L total PFAS",
      "Ban on PFAS in food contact materials by 2025"
    ],
    pros: ["Most comprehensive approach", "Prevents regrettable substitution", "Addresses entire class"],
    cons: ["Long implementation timeline", "Industry resistance", "Economic challenges"],
    effectiveness: 95,
    color: "primary"
  },
  {
    id: "us",
    type: "government",
    icon: Building,
    name: "United States EPA",
    approach: "National Drinking Water Standards",
    description: "The EPA finalized first-ever national drinking water standards for PFAS in 2024, setting MCLs for six compounds.",
    actions: [
      "MCL of 4 ppt for PFOA and PFOS individually",
      "Hazard index for PFHxS, PFNA, HFPO-DA, PFBS",
      "3-5 year compliance timeline for water systems",
      "CERCLA designation for Superfund cleanup authority"
    ],
    pros: ["Enforceable national standard", "Triggers cleanup authority", "Protects drinking water"],
    cons: ["Only addresses drinking water", "No production ban", "Limited to 6 compounds"],
    effectiveness: 70,
    color: "chart-1"
  },
  {
    id: "filtration",
    type: "technology",
    icon: FlaskConical,
    name: "Filtration Technologies",
    approach: "GAC & Ion Exchange",
    description: "Water treatment using granular activated carbon, ion exchange resins, and reverse osmosis can effectively remove PFAS.",
    actions: [
      "GAC adsorption: 90-99% removal for long-chain PFAS",
      "Ion exchange: >99% removal, selective for PFAS",
      "Reverse osmosis: >95% removal but high energy",
      "Nanofiltration: Emerging with promising results"
    ],
    pros: ["Immediately deployable", "High removal efficiency", "Proven technology"],
    cons: ["Does not destroy PFAS", "Creates concentrated waste", "High operational costs"],
    effectiveness: 80,
    color: "chart-3"
  },
  {
    id: "destruction",
    type: "technology",
    icon: Leaf,
    name: "Destruction Technologies",
    approach: "Electrochemical & Advanced Oxidation",
    description: "Emerging technologies aim to break C-F bonds and completely mineralize PFAS into harmless products.",
    actions: [
      "High-temperature incineration (>1000°C)",
      "Electrochemical oxidation with BDD electrodes",
      "Supercritical water oxidation: >99.9% destruction",
      "UV/sulfite photochemical treatment"
    ],
    pros: ["Permanent destruction", "No secondary waste", "Environmentally sound"],
    cons: ["High energy requirements", "Most in development", "High capital costs"],
    effectiveness: 65,
    color: "accent"
  }
]

export function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedSolution, setSelectedSolution] = useState<string>("eu")

  const currentSolution = solutions.find(s => s.id === selectedSolution)!

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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-3/10 border border-chart-3/20 text-chart-3 text-sm font-medium mb-6">
            <Lightbulb className="h-4 w-4" />
            Global Response
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Addressing the <span className="text-gradient">PFAS Crisis</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Governments and researchers worldwide are developing approaches to tackle PFAS. 
            Explore leading regulatory and technological solutions.
          </p>
        </motion.div>

        {/* Solution Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {solutions.map((solution, index) => (
            <motion.button
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedSolution(solution.id)}
              className={`relative flex items-center gap-4 p-5 rounded-2xl border transition-all text-left overflow-hidden ${
                selectedSolution === solution.id
                  ? `bg-${solution.color}/10 border-${solution.color}/50`
                  : "bg-card/50 border-border hover:border-primary/30 backdrop-blur-sm"
              }`}
            >
              {selectedSolution === solution.id && (
                <div className={`absolute inset-0 bg-${solution.color}/5`} />
              )}
              <div className={`relative p-3 rounded-xl ${selectedSolution === solution.id ? `bg-${solution.color}/20` : 'bg-muted/50'} border ${selectedSolution === solution.id ? `border-${solution.color}/30` : 'border-border'}`}>
                <solution.icon className={`h-5 w-5 ${selectedSolution === solution.id ? `text-${solution.color}` : 'text-muted-foreground'}`} />
              </div>
              <div className="relative">
                <p className={`font-bold ${selectedSolution === solution.id ? `text-${solution.color}` : 'text-foreground'}`}>
                  {solution.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {solution.type === "government" ? "Regulatory" : "Technology"}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Solution Detail Card */}
        <motion.div
          key={selectedSolution}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <div className={`absolute inset-0 bg-${currentSolution.color}/5 blur-3xl rounded-3xl`} />
          <div className="relative bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
            <div className="p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left: Description */}
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-${currentSolution.color}/10 border border-${currentSolution.color}/20`}>
                      <currentSolution.icon className={`h-8 w-8 text-${currentSolution.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{currentSolution.name}</h3>
                      <p className={`text-${currentSolution.color} font-medium`}>{currentSolution.approach}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                    {currentSolution.description}
                  </p>

                  <h4 className="font-bold text-foreground mb-4">Key Actions</h4>
                  <ul className="space-y-3 mb-8">
                    {currentSolution.actions.map((action, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <ArrowRight className={`h-4 w-4 text-${currentSolution.color} mt-1 flex-shrink-0`} />
                        {action}
                      </li>
                    ))}
                  </ul>

                  {/* Pros and Cons */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="bg-chart-3/5 border border-chart-3/20 rounded-2xl p-5">
                      <h5 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-chart-3" />
                        Strengths
                      </h5>
                      <ul className="space-y-2">
                        {currentSolution.pros.map((pro, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-chart-3 mt-2 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5">
                      <h5 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <XCircle className="h-5 w-5 text-accent" />
                        Challenges
                      </h5>
                      <ul className="space-y-2">
                        {currentSolution.cons.map((con, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right: Effectiveness Meter */}
                <div className="lg:w-1/3">
                  <div className="bg-muted/30 rounded-2xl p-6 lg:p-8 h-full flex flex-col border border-border">
                    <h4 className="font-bold text-foreground mb-6 text-center text-lg">Effectiveness Rating</h4>
                    
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="relative w-36 h-36 mb-6">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="8"
                            className="text-muted"
                          />
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke={`var(--${currentSolution.color})`}
                            strokeWidth="8"
                            strokeLinecap="round"
                            className={`text-${currentSolution.color}`}
                            initial={{ strokeDasharray: "0 264" }}
                            animate={{ strokeDasharray: `${currentSolution.effectiveness * 2.64} 264` }}
                            transition={{ duration: 1, delay: 0.3 }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl font-bold text-foreground">{currentSolution.effectiveness}%</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground text-center">
                        Based on scope, feasibility, and environmental impact
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Best Practice Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-3xl" />
            <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 glow-primary flex-shrink-0">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                    Recommended: EU Universal PFAS Restriction
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The EU approach represents the most effective long-term solution by addressing the entire class of PFAS chemicals, 
                    preventing regrettable substitution, and creating regulatory certainty for industry transition.
                  </p>
                  
                  <div className="bg-card/50 rounded-2xl p-5 border border-border backdrop-blur-sm">
                    <h4 className="font-bold text-foreground mb-2">Key Challenges</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      While comprehensive, the EU approach faces implementation challenges including lengthy timelines (up to 13.5 years), 
                      industry opposition, and the need for viable alternatives in critical applications. A truly effective global solution 
                      requires international coordination and investment in destruction technologies.
                    </p>
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
