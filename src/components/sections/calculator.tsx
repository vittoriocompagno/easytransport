"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { Package2, Truck, Plane, Ship } from "lucide-react"

const shippingMethods = [
  {
    id: "standard",
    title: "Standard",
    description: "Consegna in 3-5 giorni lavorativi",
    icon: Truck,
    price: "€10.00"
  },
  {
    id: "express",
    title: "Express",
    description: "Consegna in 1-2 giorni lavorativi",
    icon: Plane,
    price: "€25.00"
  },
  {
    id: "cargo",
    title: "Cargo",
    description: "Spedizioni voluminose via mare",
    icon: Ship,
    price: "Su preventivo"
  }
]

export function Calculator() {
  const [step, setStep] = useState(1)
  const [shippingMethod, setShippingMethod] = useState("")

  return (
    <section id="calculator" className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl" />
      </div>

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Calcola il tuo
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              preventivo
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ottieni una stima immediata per la tua spedizione in pochi semplici passaggi
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Progress Steps */}
            <div className="flex border-b overflow-x-auto scrollbar-hide">
              {[1, 2, 3].map((number) => (
                <div
                  key={number}
                  className={cn(
                    "flex-1 min-w-[150px] p-4 text-center",
                    step === number && "bg-primary/5"
                  )}
                >
                  <div className="flex items-center justify-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                        step === number
                          ? "bg-primary text-white"
                          : step > number
                          ? "bg-primary/20 text-primary"
                          : "bg-gray-100 text-gray-500"
                      )}
                    >
                      {number}
                    </div>
                    <span
                      className={cn(
                        "font-medium whitespace-nowrap",
                        step === number
                          ? "text-primary"
                          : step > number
                          ? "text-gray-900"
                          : "text-gray-500"
                      )}
                    >
                      {number === 1
                        ? "Dettagli spedizione"
                        : number === 2
                        ? "Metodo di spedizione"
                        : "Riepilogo"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Form Content */}
            <div className="p-4 md:p-8">
              {step === 1 && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="from">Indirizzo di ritiro</Label>
                      <Input id="from" placeholder="Via, Città, CAP" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="to">Indirizzo di consegna</Label>
                      <Input id="to" placeholder="Via, Città, CAP" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="weight">Peso (kg)</Label>
                      <Input id="weight" type="number" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="length">Lunghezza (cm)</Label>
                      <Input id="length" type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="width">Larghezza (cm)</Label>
                      <Input id="width" type="number" placeholder="0" />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      size="lg"
                      className="rounded-full px-8"
                      onClick={() => setStep(2)}
                    >
                      Continua
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <RadioGroup
                    value={shippingMethod}
                    onValueChange={setShippingMethod}
                    className="grid gap-4"
                  >
                    {shippingMethods.map((method) => {
                      const Icon = method.icon
                      return (
                        <div key={method.id}>
                          <RadioGroupItem
                            value={method.id}
                            id={method.id}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={method.id}
                            className={cn(
                              "flex flex-col md:flex-row md:items-center justify-between p-4 md:p-6 rounded-2xl border-2 cursor-pointer transition-all gap-4",
                              "hover:border-primary/50 hover:bg-primary/5",
                              "peer-checked:border-primary peer-checked:bg-primary/5"
                            )}
                          >
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                              <div className="text-center md:text-left">
                                <div className="font-medium">{method.title}</div>
                                <div className="text-sm text-gray-500">
                                  {method.description}
                                </div>
                              </div>
                            </div>
                            <div className="font-medium text-primary text-center md:text-right">
                              {method.price}
                            </div>
                          </Label>
                        </div>
                      )
                    })}
                  </RadioGroup>

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8"
                      onClick={() => setStep(1)}
                    >
                      Indietro
                    </Button>
                    <Button
                      size="lg"
                      className="rounded-full px-8"
                      onClick={() => setStep(3)}
                    >
                      Continua
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Distanza stimata</span>
                      <span className="font-medium">245 km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Peso</span>
                      <span className="font-medium">2.5 kg</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Dimensioni</span>
                      <span className="font-medium">30 x 20 x 15 cm</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Metodo di spedizione</span>
                      <span className="font-medium">Express</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex justify-between">
                        <span className="font-medium">Totale stimato</span>
                        <span className="text-xl font-semibold text-primary">
                          €25.00
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8"
                      onClick={() => setStep(2)}
                    >
                      Indietro
                    </Button>
                    <Button
                      size="lg"
                      className="rounded-full px-8 bg-primary hover:bg-primary/90"
                    >
                      Procedi all'ordine
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 