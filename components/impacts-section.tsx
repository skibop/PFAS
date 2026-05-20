"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Heart, Brain, Baby, Shield, Activity, Dna, Fish, Bird, Bug, AlertTriangle, TrendingUp } from "lucide-react"

const healthEffects = [
  {
    icon: Dna,
    title: "Cancer",
    description: "PFAS exposure is linked to increased risk of kidney cancer, testicular cancer, and other malignancies.",
    evidence: "C8 Health Project: 69,000 participants near DuPont facility showed elevated cancer rates",
    mechanism: "PFAS interfere with cellular signaling pathways and may promote tumor growth through endocrine disruption",
    color: "accent"
  },
  {
    icon: Shield,
    title: "Immune Suppression",
    description: "Reduces antibody response to vaccines and increases susceptibility to infections.",
    evidence: "Faroe Islands study: Children with elevated PFAS had 50% reduced antibody levels",
    mechanism: "PFAS bind to immune cell receptors, suppressing T-cell and B-cell activity",
    color: "chart-5"
  },
  {
    icon: Activity,
    title: "Thyroid Disease",
    description: "Disrupts thyroid hormone production and metabolism, leading to hypothyroidism.",
    evidence: "NHANES data: Individuals with high PFOA levels have 2x higher rates of thyroid disease",
    mechanism: "PFAS compete with thyroid hormones (T3, T4) for binding to transport proteins",
    color: "primary"
  },
  {
    icon: Heart,
    title: "Cardiovascular",
    description: "Associated with increased cholesterol, hypertension, and cardiovascular disease risk.",
    evidence: "Multiple studies show 1-2 mg/dL cholesterol increase per ng/mL PFAS in blood",
    mechanism: "PFAS activate PPARs affecting lipid metabolism",
    color: "chart-2"
  },
  {
    icon: Baby,
    title: "Developmental",
    description: "Prenatal exposure linked to low birth weight, developmental delays, and reduced fetal growth.",
    evidence: "Danish cohort: Higher maternal PFAS associated with 100-150g lower birth weight",
    mechanism: "PFAS cross placental barrier and interfere with fetal growth hormone signaling",
    color: "chart-3"
  },
  {
    icon: Brain,
    title: "Neurological",
    description: "Emerging evidence links PFAS to cognitive deficits and attention disorders in children.",
    evidence: "Studies show association between prenatal PFAS exposure and ADHD symptoms",
    mechanism: "PFAS affect neurotransmitter systems and may cause oxidative stress in neural tissue",
    color: "chart-4"
  }
]

const ecosystemImpacts = [
  {
    icon: Fish,
    organism: "Fish & Aquatic Life",
    effects: [
      "Bioaccumulation up to 30,000x water concentrations",
      "Liver damage and metabolic disruption",
      "Reproductive impairment",
      "Altered behavior patterns"
    ],
    threshold: "< 1 ng/L can cause effects"
  },
  {
    icon: Bird,
    organism: "Birds & Wildlife",
    effects: [
      "Eggshell thinning and reproductive failure",
      "Liver enlargement and lesions",
      "Immune system suppression",
      "Biomagnification in food chains"
    ],
    threshold: "Predatory birds most affected"
  },
  {
    icon: Bug,
    organism: "Soil Organisms",
    effects: [
      "Altered microbial communities",
      "Reduced earthworm reproduction",
      "Plant uptake into food crops",
      "Persistent contamination"
    ],
    threshold: "10-100 ng/g soil threshold"
  }
]

export function ImpactsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeEffect, setActiveEffect] = useState<number | null>(null)

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
            Health & <span className="text-gradient">Ecosystem</span> Impacts
          </h2>
        </motion.div>

        {/* Human Health Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">Human Health Effects</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {healthEffects.map((effect, index) => (
              <motion.div
                key={effect.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div
                  onClick={() => setActiveEffect(activeEffect === index ? null : index)}
                  className={`relative h-full cursor-pointer bg-card rounded-2xl border transition-all ${
                    activeEffect === index
                      ? `border-${effect.color}/50 shadow-lg`
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-${effect.color}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="relative p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-${effect.color}/10 border border-${effect.color}/20`}>
                        <effect.icon className={`h-6 w-6 text-${effect.color}`} />
                      </div>
                      <h4 className="font-bold text-lg text-foreground">{effect.title}</h4>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {effect.description}
                    </p>

                    {activeEffect === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 pt-4 border-t border-border"
                      >
                        <div>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Evidence</p>
                          <p className="text-sm text-muted-foreground">{effect.evidence}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Mechanism</p>
                          <p className="text-sm text-muted-foreground">{effect.mechanism}</p>
                        </div>
                      </motion.div>
                    )}

                    <p className={`text-xs mt-4 ${activeEffect === index ? 'text-muted-foreground' : `text-${effect.color}`}`}>
                      {activeEffect === index ? "Click to collapse" : "Click for research details"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ecosystem Impacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">Ecosystem Impacts</h3>
          
          <div className="grid md:grid-cols-3 gap-5">
            {ecosystemImpacts.map((impact, index) => (
              <motion.div
                key={impact.organism}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-chart-3/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                  <div className="p-3 rounded-xl bg-chart-3/10 border border-chart-3/20">
                    <impact.icon className="h-6 w-6 text-chart-3" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg">{impact.organism}</h4>
                </div>
                
                <ul className="space-y-3 mb-5">
                  {impact.effects.map((effect, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-chart-3 mt-2 flex-shrink-0" />
                      <span className="text-sm">{effect}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-muted/30 rounded-xl px-4 py-3 border border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Effect Threshold: </span>
                    {impact.threshold}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-3xl" />
            <div className="relative bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Critical Statistics</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { value: "4 ppt", label: "New EPA Health Advisory", subtext: "Down from 70 ppt in 2016" },
                  { value: "98%", label: "Americans with PFAS in blood", subtext: "CDC NHANES data" },
                  { value: "3,186+", label: "Known contamination sites", subtext: "In the United States" },
                  { value: "$2B+", label: "Annual healthcare costs", subtext: "Attributable to PFAS" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="text-center p-5 bg-card/50 rounded-2xl border border-border backdrop-blur-sm"
                  >
                    <p className="text-3xl lg:text-4xl font-bold text-accent mb-2">{stat.value}</p>
                    <p className="text-sm font-medium text-foreground mb-1">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.subtext}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
