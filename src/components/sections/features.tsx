import { Card } from "@/components/ui/card"
import { Calculator, Clock, Shield, ArrowRight, Truck, HeadphonesIcon, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ScrollButton } from "@/components/ui/scroll-button"

const features = [
  {
    title: "Preventivi immediati",
    description: "Calcola i costi di spedizione in pochi secondi con il nostro intuitivo strumento online. Tariffe competitive e trasparenti.",
    icon: Calculator,
    color: "bg-primary/10 text-primary",
    gradient: "from-primary to-primary/80",
  },
  {
    title: "Tracciamento in tempo reale",
    description: "Segui i tuoi pacchi passo dopo passo, ovunque si trovino. Notifiche istantanee sullo stato della spedizione.",
    icon: MapPin,
    color: "bg-primary/10 text-primary",
    gradient: "from-primary to-primary/80",
  },
  {
    title: "Consegne rapide",
    description: "Ci impegniamo a far arrivare le tue merci a destinazione in modo puntuale e in perfette condizioni.",
    icon: Truck,
    color: "bg-primary/10 text-primary",
    gradient: "from-primary to-primary/80",
  },
  {
    title: "Assistenza 24/7",
    description: "Il nostro team di supporto è sempre disponibile per rispondere a ogni tua domanda e risolvere qualsiasi problema.",
    icon: HeadphonesIcon,
    color: "bg-primary/10 text-primary",
    gradient: "from-primary to-primary/80",
  },
  {
    title: "Spedizioni sicure",
    description: "La sicurezza delle tue merci è la nostra priorità. Ogni spedizione è assicurata e monitorata costantemente.",
    icon: Shield,
    color: "bg-primary/10 text-primary",
    gradient: "from-primary to-primary/80",
  },
  {
    title: "Consegne puntuali",
    description: "Rispettiamo le tempistiche concordate. Il tuo business non può aspettare, e noi lo sappiamo.",
    icon: Clock,
    color: "bg-primary/10 text-primary",
    gradient: "from-primary to-primary/80",
  },
]

export function Features() {
  return (
    <section id="features" className="section-spacing">
      {/* Background Elements */}
      <div className="section-blob top-20 right-0" />
      <div className="section-blob -bottom-20 left-0" />
      
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <h2 className="section-title">
            Cosa ci
            <span className="gradient-text block">
              distingue
            </span>
          </h2>
          <p className="section-subtitle">
            Scopri perché migliaia di clienti scelgono EasyTransport per le loro spedizioni
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16 px-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={feature.title}
                className={cn(
                  "opacity-0",
                  "animate-fade-in-up",
                  index % 3 === 0 ? "animation-delay-0" :
                  index % 3 === 1 ? "animation-delay-150" :
                  "animation-delay-300"
                )}
              >
                <Card className="card-hover relative p-6 bg-white h-full flex flex-col">
                  <div className={cn(
                    "w-10 h-10 rounded-lg mb-4 flex items-center justify-center",
                    feature.color
                  )}>
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow text-sm">{feature.description}</p>
                  <Button 
                    variant="ghost" 
                    className="group justify-start hover:text-primary p-0 h-auto font-medium text-gray-700 text-sm"
                  >
                    Scopri di più
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="relative rounded-3xl overflow-hidden animate-fade-in-up animation-delay-450 mx-4">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
          <div className="absolute inset-0 bg-grid-pattern-light bg-grid" />
          <div className="relative p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  Pronto a semplificare le tue spedizioni?
                </h3>
                <p className="text-base text-gray-300">
                  Calcola il tuo preventivo gratuito oggi stesso e scopri quanto è facile spedire con EasyTransport
                </p>
              </div>
              <div className="flex flex-col md:flex-row w-full md:w-auto gap-3">
                <ScrollButton 
                  targetId="calculator"
                  size="lg" 
                  className="button-primary h-11 w-full md:w-auto hover-glow"
                >
                  Calcola preventivo
                </ScrollButton>
                <ScrollButton 
                  targetId="contact"
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full h-11 w-full md:w-auto bg-white/10"
                >
                  Contattaci
                </ScrollButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 