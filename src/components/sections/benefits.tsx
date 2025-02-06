import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Tag, Shield, Timer, Headphones, Calendar } from "lucide-react"

const benefits = [
  {
    title: "Tracciamento in Tempo Reale",
    description: "Resta informato ad ogni passo con il nostro sistema di tracciamento avanzato.",
    icon: MapPin,
  },
  {
    title: "Prezzi Competitivi",
    description: "Ottieni le migliori tariffe senza compromettere l'affidabilità.",
    icon: Tag,
  },
  {
    title: "Sicuro e Affidabile",
    description: "Le tue spedizioni sono al sicuro con il nostro team esperto.",
    icon: Shield,
  },
  {
    title: "Consegna Rapida",
    description: "Consegniamo puntualmente, sempre.",
    icon: Timer,
  },
  {
    title: "Supporto 24/7",
    description: "Il nostro team di supporto è disponibile 24 ore su 24 per assisterti.",
    icon: Headphones,
  },
  {
    title: "Prenotazione Facile",
    description: "Prenota la tua spedizione online in pochi clic.",
    icon: Calendar,
  },
]

export function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Perché Scegliere EasyTransport
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Scopri i vantaggi che ci rendono il partner ideale per le tue spedizioni
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <Card key={benefit.title} className="flex flex-col items-center text-center p-6">
                <CardHeader>
                  <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 