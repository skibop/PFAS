"use client"

import { Droplets, Github, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chemistry", label: "Chemistry" },
  { href: "/pathway", label: "Pathway" },
  { href: "/impacts", label: "Impacts" },
  { href: "/solutions", label: "Solutions" },
  { href: "/references", label: "References" },
]

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-border">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all" />
                <div className="relative p-2 rounded-xl bg-primary/10 border border-primary/20">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <span className="font-bold text-lg text-foreground">PFAS</span>
                <span className="text-primary text-sm block -mt-1 font-medium">Forever Chemicals</span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              An educational resource dedicated to understanding PFAS contamination, 
              its chemistry, environmental pathways, and solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-foreground mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold text-foreground mb-5">About This Project</h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Created as an educational resource for the Environmental Chemistry Competition, 
              focusing on chemical waste migration and its impact on our world.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-3 rounded-xl bg-muted/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="p-3 rounded-xl bg-muted/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 PFAS Education Project. Created for educational purposes.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-chart-3 animate-pulse" />
              All content supported by peer-reviewed research
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
