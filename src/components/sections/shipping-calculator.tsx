"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type Step = {
  title: string
  description: string
}

const steps: Step[] = [
  {
    title: "Origine e Destinazione",
    description: "Inserisci i dettagli del ritiro e della consegna",
  },
  {
    title: "Dettagli Spedizione",
    description: "Specifica peso e dimensioni del pacco",
  },
  {
    title: "Opzioni di Consegna",
    description: "Scegli la modalità di spedizione",
  },
]

export function ShippingCalculator() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <section id="calculator" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Calcola il Costo della Spedizione
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Ottieni un preventivo istantaneo per la tua spedizione
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl mt-8">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                    currentStep === index
                      ? "bg-blue-600 text-white"
                      : currentStep > index
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600 dark:bg-gray-700"
                  )}
                >
                  {index + 1}
                </div>
                <span className="mt-2 text-sm font-medium hidden sm:block">
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Calculator Form */}
          <Card>
            <CardHeader>
              <CardTitle>{steps[currentStep].title}</CardTitle>
            </CardHeader>
            <CardContent>
              {currentStep === 0 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Indirizzo di Ritiro</Label>
                    <Input id="pickup" placeholder="Via, Città, CAP" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="delivery">Indirizzo di Consegna</Label>
                    <Input id="delivery" placeholder="Via, Città, CAP" />
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Peso (kg)</Label>
                    <Input id="weight" type="number" placeholder="0.00" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="length">Lunghezza (cm)</Label>
                      <Input id="length" type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="width">Larghezza (cm)</Label>
                      <Input id="width" type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Altezza (cm)</Label>
                      <Input id="height" type="number" placeholder="0" />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Data di Ritiro</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Tipo di Servizio</Label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="standard">Standard (2-3 giorni)</option>
                      <option value="express">Express (24h)</option>
                      <option value="priority">Priority (48h)</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                  disabled={currentStep === 0}
                >
                  Indietro
                </Button>
                <Button
                  onClick={() => {
                    if (currentStep < steps.length - 1) {
                      setCurrentStep((prev) => prev + 1)
                    } else {
                      // Handle form submission
                      console.log("Form submitted")
                    }
                  }}
                >
                  {currentStep === steps.length - 1 ? "Calcola Prezzo" : "Avanti"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 