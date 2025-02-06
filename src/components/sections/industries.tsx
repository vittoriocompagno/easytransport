import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Spedizioni Nazionali",
    description: "Consegne veloci e affidabili in tutta Italia, dalla piccola città alla grande metropoli",
    image: "/images/services/national.jpg",
  },
  {
    title: "Spedizioni Internazionali",
    description: "Raggiungi qualsiasi destinazione nel mondo con i nostri servizi di spedizione globale",
    image: "/images/services/international.jpg",
  },
  {
    title: "Servizio Express",
    description: "Quando il tempo è essenziale, affidati al nostro servizio di consegna rapida garantita",
    image: "/images/services/express.jpg",
  },
  {
    title: "Merci Speciali",
    description: "Trasporto specializzato per merci che richiedono attenzioni particolari",
    image: "/images/services/special.jpg",
  },
  {
    title: "Logistica Integrata",
    description: "Soluzioni complete per la gestione della tua catena di distribuzione",
    image: "/images/services/logistics.jpg",
  },
]

export function Industries() {
  return (
    <section className="w-full py-24 md:py-32 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Affidati a EasyTransport
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                per ogni tua esigenza
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dai piccoli pacchi alle grandi spedizioni, abbiamo la soluzione giusta per te
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

        <div className="flex gap-8 pb-8 overflow-x-auto scrollbar-hide -mx-4 px-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative flex-shrink-0 w-[400px] h-[500px] rounded-2xl overflow-hidden group"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="text-white border-white bg-white/10 hover:bg-white hover:text-gray-900"
                >
                  Scopri di più
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 