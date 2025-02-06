"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { Package, Truck, Plane } from "lucide-react"

const shippingTypes = [
  {
    id: "national",
    title: "Nazionale",
    description: "Spedizioni in tutta Italia",
    icon: Truck,
  },
  {
    id: "international",
    title: "Internazionale",
    description: "Spedizioni in tutto il mondo",
    icon: Plane,
  },
  {
    id: "express",
    title: "Express",
    description: "Consegna rapida garantita",
    icon: Package,
  },
]

export function PresentationForm() {
  const [step, setStep] = useState(1)
  const [shippingType, setShippingType] = useState("")

  return (
    <section id="calculator" className="w-full py-24 md:py-32 bg-gray-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:60px_60px]" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-semibold tracking-tight">
              Calcola il tuo
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                {" "}preventivo istantaneo
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Ottieni una stima accurata per la tua spedizione in pochi semplici passaggi
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-3xl blur" />
            <div className="relative bg-white rounded-2xl shadow-lg p-8">
              {/* Progress Steps */}
              <div className="flex justify-between mb-8">
                {[1, 2, 3].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                      step === number
                        ? "bg-orange-600 text-white"
                        : step > number
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    )}>
                      {number}
                    </div>
                    <div className="text-sm mt-2 font-medium text-gray-600">
                      {number === 1 ? "Tipo" : number === 2 ? "Dettagli" : "Riepilogo"}
                    </div>
                  </div>
                ))}
              </div>

              <form className="space-y-8">
                {step === 1 && (
                  <div className="space-y-4">
                    <RadioGroup
                      value={shippingType}
                      onValueChange={setShippingType}
                      className="grid gap-4 md:grid-cols-3"
                    >
                      {shippingTypes.map((type) => {
                        const Icon = type.icon
                        return (
                          <div key={type.id}>
                            <RadioGroupItem
                              value={type.id}
                              id={type.id}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={type.id}
                              className={cn(
                                "flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-popover p-6",
                                "hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-orange-600",
                                "cursor-pointer transition-colors"
                              )}
                            >
                              <Icon className="mb-3 h-6 w-6" />
                              <div className="font-semibold">{type.title}</div>
                              <div className="text-sm text-gray-600 text-center">
                                {type.description}
                              </div>
                            </Label>
                          </div>
                        )
                      })}
                    </RadioGroup>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="origin">Indirizzo di ritiro</Label>
                        <Input id="origin" placeholder="Via, Città, CAP" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="destination">Indirizzo di consegna</Label>
                        <Input id="destination" placeholder="Via, Città, CAP" />
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="weight">Peso (kg)</Label>
                        <Input id="weight" type="number" placeholder="0.00" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dimensions">Dimensioni (cm)</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <Input placeholder="L" />
                          <Input placeholder="W" />
                          <Input placeholder="H" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="rounded-lg bg-gray-50 p-6">
                      <div className="grid gap-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Tipo spedizione</span>
                          <span className="font-medium">Internazionale</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Distanza</span>
                          <span className="font-medium">1,234 km</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Peso</span>
                          <span className="font-medium">5.2 kg</span>
                        </div>
                        <div className="pt-4 border-t">
                          <div className="flex justify-between">
                            <span className="text-lg font-medium">Totale stimato</span>
                            <span className="text-lg font-semibold">€149.99</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            * Il prezzo finale potrebbe variare in base a fattori specifici
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep((prev) => Math.max(1, prev - 1))}
                    disabled={step === 1}
                  >
                    Indietro
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      if (step < 3) {
                        setStep((prev) => prev + 1)
                      } else {
                        // Handle form submission
                        console.log("Form submitted")
                      }
                    }}
                  >
                    {step === 3 ? "Richiedi preventivo" : "Continua"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 