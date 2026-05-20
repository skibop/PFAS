"use client"

export function Footer() {
  return (
    <footer className="relative z-10 bg-card border-t border-border py-8">
      {/* subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 text-center">
        <p className="text-foreground font-medium mb-2">
          Designed and Developed by Ankit Kale and Survani Sinha
        </p>

        <p className="text-muted-foreground text-sm">
          South Brunswick High School Team A, 2026
        </p>
      </div>
    </footer>
  )
}