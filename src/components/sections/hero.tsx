import { cn } from "@/lib/utils"
import { ScrollButton } from "@/components/ui/scroll-button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Clock, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden section-spacing">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-20 -left-6 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 -right-6 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:60px_60px]" />
      </div>
      
      <div className="container-spacing relative">
        <div className="flex flex-col items-center space-y-12 text-center max-w-[1000px] mx-auto">
          <Badge variant="outline" className="animate-fade-in px-6 py-3 text-sm">
            <Calculator className="w-4 h-4 mr-2" />
            Calcola il tuo preventivo gratuito in pochi secondi
          </Badge>
          
          <div className="space-y-8 animate-fade-in animation-delay-150">
            <h1 className="heading-xl">
              La tua soluzione
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                semplice
              </span>
              <br />
              per trasporti senza pensieri
            </h1>
            
            <p className="text-body-lg max-w-[700px] mx-auto">
              Stanco di complicazioni e stress quando si tratta di spedizioni? EasyTransport è qui per semplificare la logistica per te, con un servizio affidabile, trasparente e conveniente.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto animate-fade-in animation-delay-300">
            <ScrollButton
              targetId="calculator"
              size="lg"
              className={cn(
                "w-full sm:w-auto text-lg h-14 px-10",
                "bg-primary hover:bg-primary/90 text-white",
                "font-medium tracking-wide transition-all duration-300",
                "shadow-lg hover:shadow-xl hover:-translate-y-0.5",
                "rounded-full"
              )}
            >
              Calcola preventivo
            </ScrollButton>
            <ScrollButton
              targetId="contact"
              variant="outline"
              size="lg"
              className={cn(
                "w-full sm:w-auto text-lg h-14 px-10",
                "border-2 hover:bg-gray-50",
                "font-medium tracking-wide transition-all duration-300",
                "hover:-translate-y-0.5",
                "rounded-full"
              )}
            >
              Scopri di più
            </ScrollButton>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-16 animate-fade-in animation-delay-450">
            {[
              {
                icon: Calculator,
                title: "Preventivi immediati",
                description: "Calcola i costi in pochi secondi"
              },
              {
                icon: Clock,
                title: "Consegne rapide",
                description: "Puntualità garantita"
              },
              {
                icon: Shield,
                title: "Spedizioni sicure",
                description: "Merci sempre protette"
              }
            ].map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="card-base p-6 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold mb-1">{feature.title}</div>
                      <div className="text-sm text-gray-600">{feature.description}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 