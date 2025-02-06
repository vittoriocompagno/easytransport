import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "Con EasyTransport e i suoi sistemi di spedizione altamente sicuri, puntiamo a fornire alle aziende soluzioni di trasporto potenti e adattabili che soddisfano esigenze specifiche e accelerano l'adozione di servizi di spedizione innovativi a livello globale.",
    author: "Marco Rossi",
    role: "Vice Presidente, CTO e CPO",
    company: "Fujitsu",
    logo: "/images/logos/fujitsu.svg",
    image: "/images/testimonials/tokyo.jpg",
  },
  {
    quote: "Servizio clienti eccezionale e prezzi competitivi. Non potrei chiedere di meglio per le mie spedizioni aziendali. EasyTransport ha rivoluzionato il modo in cui gestiamo la nostra logistica.",
    author: "Laura Bianchi",
    role: "CEO",
    company: "TechItalia",
    logo: "/images/logos/techitalia.svg",
    image: "/images/testimonials/milan.jpg",
  },
  {
    quote: "La piattaforma è intuitiva e il processo di prenotazione è velocissimo. EasyTransport è diventato il nostro partner logistico di fiducia, garantendo sempre consegne puntuali e sicure.",
    author: "Giuseppe Verdi",
    role: "Direttore Operativo",
    company: "LogiTech",
    logo: "/images/logos/logitech.svg",
    image: "/images/testimonials/rome.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="w-full py-24 md:py-32 bg-gray-50/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Perché le aziende
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                scelgono EasyTransport
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Scopri come aiutiamo le aziende a ottimizzare le loro operazioni di trasporto
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-2"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-2"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={cn(
                "relative rounded-2xl overflow-hidden bg-white shadow-lg",
                index === 0 ? "md:col-span-2" : ""
              )}
            >
              <div className={cn(
                "grid gap-8",
                index === 0 ? "md:grid-cols-[1fr,400px]" : ""
              )}>
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-2 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-600 mb-8 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.logo}
                      alt={testimonial.company}
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={testimonial.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 