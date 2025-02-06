"use client"

import { Button } from "@/components/ui/button"
import { Calculator, Phone, Menu } from "lucide-react"
import { ScrollButton } from "@/components/ui/scroll-button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <div className="bg-white rounded-full shadow-lg border p-3 flex items-center justify-between gap-2">
          <ScrollButton
            targetId="calculator"
            className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full h-12"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Preventivo
          </ScrollButton>
          
          <ScrollButton
            targetId="contact"
            variant="outline"
            className="flex-1 border-primary text-primary hover:bg-primary/5 rounded-full h-12"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contattaci
          </ScrollButton>

          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-gray-900/20" onClick={() => setIsOpen(false)} />
          <div className="absolute bottom-24 right-4 w-64 bg-white rounded-2xl shadow-xl p-4 space-y-2">
            <ScrollButton
              targetId="services"
              className="w-full justify-start text-gray-700 hover:text-primary hover:bg-primary/5 rounded-xl h-12"
              onClick={() => setIsOpen(false)}
            >
              Servizi
            </ScrollButton>
            <ScrollButton
              targetId="features"
              className="w-full justify-start text-gray-700 hover:text-primary hover:bg-primary/5 rounded-xl h-12"
              onClick={() => setIsOpen(false)}
            >
              Come funziona
            </ScrollButton>
            <ScrollButton
              targetId="about"
              className="w-full justify-start text-gray-700 hover:text-primary hover:bg-primary/5 rounded-xl h-12"
              onClick={() => setIsOpen(false)}
            >
              Chi siamo
            </ScrollButton>
          </div>
        </div>
      )}
    </>
  )
} 