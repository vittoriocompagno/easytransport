"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Package, TrendingUp, Users } from "lucide-react"
import { ScrollButton } from "@/components/ui/scroll-button"

const stats = [
  {
    value: "10K+",
    label: "Spedizioni Completate",
    icon: Package,
  },
  {
    value: "98%",
    label: "Clienti Soddisfatti",
    icon: TrendingUp,
  },
  {
    value: "24/7",
    label: "Supporto Clienti",
    icon: Users,
  },
]

export function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Chi Siamo
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                EasyTransport è nata con una missione chiara: rendere le spedizioni semplici, affidabili ed efficienti per tutti.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 dark:text-gray-400">
                Con anni di esperienza nel settore della logistica, abbiamo sviluppato un sistema che combina tecnologia
                all'avanguardia e servizio clienti eccezionale per offrire la migliore esperienza di spedizione possibile.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Il nostro team di esperti lavora instancabilmente per garantire che ogni spedizione arrivi a destinazione
                in modo sicuro e puntuale, mantenendo sempre i più alti standard di qualità e professionalità.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <ScrollButton targetId="contact">
                Contattaci
              </ScrollButton>
              <ScrollButton
                targetId="calculator"
                variant="outline"
              >
                Calcola un Preventivo
              </ScrollButton>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.label}>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <Icon className="h-12 w-12 mb-2 text-blue-600 dark:text-blue-400" />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 