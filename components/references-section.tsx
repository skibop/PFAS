"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, ExternalLink, FileText, Building2, GraduationCap } from "lucide-react"

const academicReferences = [
  {
    type: "Journal Article",
    icon: FileText,
    authors: "Sunderland, E.M., Hu, X.C., Dassuncao, C., et al.",
    year: "2019",
    title: "A review of the pathways of human exposure to poly- and perfluoroalkyl substances (PFASs)",
    journal: "Journal of Exposure Science & Environmental Epidemiology",
    volume: "29(2), 131-147",
    doi: "10.1038/s41370-018-0094-1",
    summary: "Comprehensive review of PFAS exposure pathways including drinking water, food, and consumer products."
  },
  {
    type: "Journal Article",
    icon: FileText,
    authors: "Cousins, I.T., DeWitt, J.C., Glüge, J., et al.",
    year: "2020",
    title: "The high persistence of PFAS is sufficient for their management as a chemical class",
    journal: "Environmental Science: Processes & Impacts",
    volume: "22(12), 2307-2312",
    doi: "10.1039/d0em00355g",
    summary: "Key paper arguing that PFAS persistence alone justifies regulating them as a class."
  },
  {
    type: "Journal Article",
    icon: FileText,
    authors: "Fenton, S.E., Ducatman, A., Boobis, A., et al.",
    year: "2021",
    title: "Per- and polyfluoroalkyl substance toxicity and human health review",
    journal: "Environmental Toxicology and Chemistry",
    volume: "40(3), 606-630",
    doi: "10.1002/etc.4890",
    summary: "Authoritative review covering immunotoxicity, hepatotoxicity, developmental effects, and carcinogenicity."
  },
  {
    type: "Foundational Paper",
    icon: GraduationCap,
    authors: "Buck, R.C., Franklin, J., Berger, U., et al.",
    year: "2011",
    title: "Perfluoroalkyl and Polyfluoroalkyl Substances in the Environment: Terminology and Classification",
    journal: "Integrated Environmental Assessment and Management",
    volume: "7(4), 513-541",
    doi: "10.1002/ieam.258",
    summary: "Foundational paper establishing PFAS terminology and classification system."
  },
  {
    type: "Government Report",
    icon: Building2,
    authors: "Agency for Toxic Substances and Disease Registry (ATSDR)",
    year: "2021",
    title: "Toxicological Profile for Perfluoroalkyls",
    journal: "U.S. Department of Health and Human Services",
    volume: "Draft for Public Comment",
    doi: null,
    summary: "Comprehensive U.S. government assessment of PFAS toxicology and health effects."
  },
  {
    type: "Journal Article",
    icon: FileText,
    authors: "Brennan, N.M., Evans, A.T., Fritz, M.K., et al.",
    year: "2021",
    title: "Trends in the Regulation of Per- and Polyfluoroalkyl Substances (PFAS)",
    journal: "International Journal of Environmental Research and Public Health",
    volume: "18(20), 10900",
    doi: "10.3390/ijerph182010900",
    summary: "Review of global PFAS regulations including EU REACH and US EPA actions."
  }
]

const additionalResources = [
  {
    name: "EPA PFAS Strategic Roadmap",
    url: "https://www.epa.gov/pfas",
    description: "Official U.S. EPA resources on PFAS research, regulations, and cleanup"
  },
  {
    name: "NIEHS PFAS Research",
    url: "https://www.niehs.nih.gov/health/topics/agents/pfc",
    description: "National Institute of Environmental Health Sciences PFAS information"
  },
  {
    name: "European Chemicals Agency",
    url: "https://echa.europa.eu/hot-topics/perfluoroalkyl-chemicals-pfas",
    description: "EU PFAS restriction proposal and regulatory documents"
  }
]

export function ReferencesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            Research <span className="text-gradient">References</span>
          </h2>
          
        </motion.div>

        {/* Academic References */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {academicReferences.map((reference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group bg-card rounded-2xl border border-border p-6 hover:border-chart-5/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-chart-5/10 border border-chart-5/20 flex-shrink-0">
                  <reference.icon className="h-5 w-5 text-chart-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-chart-5/10 text-chart-5">
                      {reference.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{reference.year}</span>
                  </div>
                  
                  <h4 className="font-bold text-foreground mb-2 leading-tight">
                    {reference.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {reference.authors}
                  </p>
                  
                  <p className="text-sm text-primary mb-1">
                    {reference.journal}, {reference.volume}
                  </p>
                  
                  {reference.doi && (
                    <p className="text-xs text-muted-foreground mb-3">
                      DOI: {reference.doi}
                    </p>
                  )}
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reference.summary}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-chart-5/5 blur-3xl rounded-3xl" />
            <div className="relative bg-card rounded-3xl border border-border p-8 lg:p-10">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
                Additional Resources
              </h3>
              <div className="grid sm:grid-cols-3 gap-5">
                {additionalResources.map((resource, index) => (
                  <motion.a
                    key={resource.name}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="group p-5 rounded-2xl bg-muted/30 border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{resource.name}</h4>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  )
}
