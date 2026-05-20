"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { TrendingUp, Info } from "lucide-react"

const contaminationData = [
  { year: "2000", sites: 42, awareness: 5 },
  { year: "2005", sites: 156, awareness: 12 },
  { year: "2010", sites: 423, awareness: 28 },
  { year: "2015", sites: 891, awareness: 45 },
  { year: "2020", sites: 2337, awareness: 72 },
  { year: "2025", sites: 3186, awareness: 88 },
]

const maxSites = Math.max(...contaminationData.map(d => d.sites))

export function DataVisualization() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl border border-border p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">PFAS Contamination Discovery Timeline</h3>
              <p className="text-muted-foreground text-sm">Known contamination sites in the United States (2000-2025)</p>
            </div>
          </div>

          {/* Chart */}
          <div className="relative h-64 md:h-80">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-muted-foreground">
              <span>3,500</span>
              <span>2,500</span>
              <span>1,500</span>
              <span>500</span>
              <span>0</span>
            </div>

            {/* Grid lines */}
            <div className="absolute left-14 right-0 top-0 bottom-8 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="border-t border-border" />
              ))}
            </div>

            {/* Bars */}
            <div className="absolute left-14 right-0 bottom-8 top-0 flex items-end justify-around gap-2 md:gap-4 px-2">
              {contaminationData.map((data, index) => {
                const height = (data.sites / maxSites) * 100
                return (
                  <motion.div
                    key={data.year}
                    className="relative flex-1 max-w-20"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${height}%` } : {}}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div 
                      className="w-full h-full rounded-t-lg bg-gradient-to-t from-primary to-primary/60 hover:from-primary/90 hover:to-primary/50 transition-colors cursor-pointer"
                    />
                    
                    {/* Tooltip */}
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-20 left-1/2 -translate-x-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-xs whitespace-nowrap z-10"
                      >
                        <p className="font-bold">{data.sites} sites</p>
                        <p className="text-background/70">Public awareness: {data.awareness}%</p>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-foreground rotate-45" />
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* X-axis labels */}
            <div className="absolute left-14 right-0 bottom-0 flex justify-around px-2">
              {contaminationData.map((data) => (
                <span key={data.year} className="text-xs text-muted-foreground">
                  {data.year}
                </span>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-t from-primary to-primary/60" />
              <span className="text-muted-foreground">Known contamination sites</span>
            </div>
          </div>

          {/* Data note */}
          <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
            <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
            <p>
              Data represents cumulative known PFAS contamination sites tracked by environmental agencies. 
              Actual contamination is likely much more widespread, with estimates suggesting over 98% of 
              Americans have PFAS in their bloodstream. Source: PFAS Project Lab, Social Science Environmental Health Research Institute.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
