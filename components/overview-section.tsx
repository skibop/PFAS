"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Factory, Droplets, TreePine, Users, AlertCircle, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function OverviewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Droplets,
      title: "Aquatic Ecosystems",
      description: "PFAS bioaccumulate up to 30,000x in fish, contaminating entire food chains.",
      href: "/impacts",
      color: "primary"
    },
    {
      icon: TreePine,
      title: "Soil & Groundwater",
      description: "Persistent chemicals leach into soil, contaminating water for millions.",
      href: "/pathway",
      color: "chart-3"
    },
    {
      icon: Users,
      title: "Human Health",
      description: "98% of Americans have detectable PFAS levels, linked to cancer and disease.",
      href: "/impacts",
      color: "accent"
    }
  ]

  return (
    <section id="overview" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            What Are <span className="text-gradient">PFAS</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Per- and polyfluoroalkyl substances are synthetic chemicals with carbon-fluorine bonds 
            so strong they persist in the environment for thousands of years.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Source Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-3xl" />
              <div className="relative bg-card rounded-3xl border border-border p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                    <Factory className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Industrial Source</h3>
                    <p className="text-muted-foreground">Primary contamination origin</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  This resource focuses on <strong className="text-foreground">industrial manufacturing facilities</strong> as 
                  the primary source of environmental PFAS contamination.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Fluoropolymer production plants",
                    "Textile & leather treatment",
                    "Electronics manufacturing",
                    "Firefighting foam (AFFF) production"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button asChild className="glow-primary">
                  <Link href="/pathway">
                    Explore Full Pathway
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right: Impact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                whileHover={{ x: 10 }}
                className="group"
              >
                <Link href={feature.href} className="block">
                  <div className="flex gap-5 p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 hover:bg-card transition-all backdrop-blur-sm">
                    <div className={`p-4 rounded-xl bg-${feature.color}/10 border border-${feature.color}/20 flex-shrink-0 h-fit group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg text-foreground">{feature.title}</h4>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-3xl" />
          <div className="relative bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-3xl p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 glow-accent">
                <AlertCircle className="h-8 w-8 text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-foreground mb-2">Why &quot;Forever Chemicals&quot;?</h4>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  The carbon-fluorine bond in PFAS is one of the strongest in organic chemistry 
                  (485 kJ/mol). This makes natural degradation virtually impossible, allowing 
                  these chemicals to persist in the environment and accumulate in living organisms 
                  for thousands of years.
                </p>
              </div>
              <Button asChild variant="outline" className="border-accent/30 hover:bg-accent/10 hover:border-accent/50 flex-shrink-0">
                <Link href="/chemistry">
                  Learn Chemistry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
