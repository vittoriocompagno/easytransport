"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { Package2, Truck, Plane, Ship, MapPin } from "lucide-react"

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
  const [weight, setWeight] = useState(0)
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")

  // Calcola la percentuale di riempimento del camion basata sul peso
  const getTruckFillPercentage = () => {
    const maxWeight = 1000 // peso massimo in kg
    const percentage = Math.min((weight / maxWeight) * 100, 100)
    return percentage
  }

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
                    "flex-1 min-w-[130px] p-3 text-center",
                    step === number && "bg-primary/5"
                  )}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div
                      className={cn(
                        "w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium",
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
                        "text-sm font-medium whitespace-nowrap",
                        step === number
                          ? "text-primary"
                          : step > number
                          ? "text-gray-900"
                          : "text-gray-500"
                      )}
                    >
                      {number === 1
                        ? "Dettagli"
                        : number === 2
                        ? "Metodo"
                        : "Riepilogo"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Form Content */}
            <div className="p-4 md:p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="from">Indirizzo di ritiro</Label>
                      <div className="relative">
                        <Input 
                          id="from" 
                          placeholder="Via, Città, CAP" 
                          value={from}
                          onChange={(e) => setFrom(e.target.value)}
                          className="pr-10"
                        />
                        <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="to">Indirizzo di consegna</Label>
                      <div className="relative">
                        <Input 
                          id="to" 
                          placeholder="Via, Città, CAP" 
                          value={to}
                          onChange={(e) => setTo(e.target.value)}
                          className="pr-10"
                        />
                        <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-2 col-span-2 md:col-span-1">
                      <Label htmlFor="weight">Peso (kg)</Label>
                      <Input 
                        id="weight" 
                        type="number" 
                        placeholder="0.00" 
                        value={weight || ""}
                        onChange={(e) => setWeight(Number(e.target.value))}
                      />
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

                  {(from || to || weight > 0) && (
                    <div className="mt-4 col-span-3 rounded-xl overflow-hidden bg-gray-100 p-4 relative">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-primary/5 to-transparent" />
                      <div className="relative">
                        {/* Strada animata con indirizzi */}
                        <div className="h-24 bg-gray-200 rounded-xl overflow-hidden relative">
                          {/* Indirizzi */}
                          <div className="absolute inset-x-0 top-0 flex justify-between items-start p-2 z-10">
                            {from && (
                              <div className="bg-white/90 rounded-lg px-2 py-1 text-xs font-medium backdrop-blur-sm flex items-center gap-1 shadow-sm">
                                <MapPin className="w-3 h-3 text-primary" />
                                {from}
                              </div>
                            )}
                            {to && (
                              <div className="bg-white/90 rounded-lg px-2 py-1 text-xs font-medium backdrop-blur-sm flex items-center gap-1 shadow-sm">
                                {to}
                                <MapPin className="w-3 h-3 text-primary" />
                              </div>
                            )}
                          </div>
                          {/* Linee della strada animate */}
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full h-1 bg-white flex">
                              {[...Array(12)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className="w-8 h-full bg-gray-300 mr-4 animate-road"
                                  style={{
                                    animationDelay: `${i * 0.2}s`
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                          {/* Camion animato */}
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-truck-bounce">
                            <div className="relative">
                              <div className={cn(
                                "transform transition-transform duration-500",
                                weight > 500 && "scale-90 -rotate-1"
                              )}>
                                <Truck 
                                  className="w-16 h-16 text-primary fill-primary stroke-none" 
                                />
                              </div>
                              {/* Ombra del camion */}
                              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-14 h-2 bg-black/10 rounded-full blur-sm" />
                            </div>
                          </div>
                        </div>
                        {/* Barra di progresso */}
                        <div className="mt-3">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary transition-all duration-500"
                              style={{ width: `${getTruckFillPercentage()}%` }}
                            />
                          </div>
                          <div className="mt-1 text-xs text-gray-500 text-right">
                            {weight} kg / 1000 kg
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end pt-4">
                    <Button
                      size="lg"
                      className="w-full md:w-auto rounded-full px-8"
                      onClick={() => setStep(2)}
                    >
                      Continua
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
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
                              "flex flex-col md:flex-row items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all gap-4",
                              "hover:border-primary/50 hover:bg-primary/5",
                              "peer-checked:border-primary peer-checked:bg-primary/5"
                            )}
                          >
                            <div className="flex flex-col items-center md:flex-row md:items-center gap-3">
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
                            <div className="font-medium text-primary">
                              {method.price}
                            </div>
                          </Label>
                        </div>
                      )
                    })}
                  </RadioGroup>

                  <div className="flex flex-col md:flex-row gap-4 justify-between pt-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full md:w-auto rounded-full px-8 order-2 md:order-1"
                      onClick={() => setStep(1)}
                    >
                      Indietro
                    </Button>
                    <Button
                      size="lg"
                      className="w-full md:w-auto rounded-full px-8 order-1 md:order-2"
                      onClick={() => setStep(3)}
                    >
                      Continua
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Distanza stimata</span>
                      <span className="font-medium">245 km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Peso</span>
                      <span className="font-medium">{weight} kg</span>
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
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Totale stimato</span>
                        <span className="text-xl font-semibold text-primary">
                          €25.00
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 justify-between pt-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full md:w-auto rounded-full px-8 order-2 md:order-1"
                      onClick={() => setStep(2)}
                    >
                      Indietro
                    </Button>
                    <Button
                      size="lg"
                      className="w-full md:w-auto rounded-full px-8 order-1 md:order-2 bg-primary hover:bg-primary/90"
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