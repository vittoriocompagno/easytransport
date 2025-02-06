"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="w-full py-24 md:py-32 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border px-6 py-2 mb-8">
              <span className="text-sm font-medium">
                Inizia gratuitamente 🚀
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Pronto a rivoluzionare
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                il tuo business?
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Contattaci per scoprire come possiamo aiutarti a ottimizzare le tue spedizioni e far crescere il tuo business.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Preventivi Istantanei</h3>
                  <p className="text-gray-600">Calcola il costo delle tue spedizioni in tempo reale</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Supporto 24/7</h3>
                  <p className="text-gray-600">Team dedicato sempre a tua disposizione</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Tracking Avanzato</h3>
                  <p className="text-gray-600">Monitora le tue spedizioni in tempo reale</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-orange-600/0 rounded-3xl -m-4" />
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input id="firstName" placeholder="Il tuo nome" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Cognome</Label>
                    <Input id="lastName" placeholder="Il tuo cognome" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email aziendale</Label>
                  <Input id="email" type="email" placeholder="tu@azienda.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Azienda</Label>
                  <Input id="company" placeholder="Nome della tua azienda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Come possiamo aiutarti?</Label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Raccontaci del tuo progetto..."
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-lg">
                  Richiedi una demo
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 