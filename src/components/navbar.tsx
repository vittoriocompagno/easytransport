"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { ScrollButton } from "@/components/ui/scroll-button"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Servizi", href: "#services" },
  { name: "Come funziona", href: "#features" },
  { name: "Preventivo", href: "#calculator" },
  { name: "Contatti", href: "#contact" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-5xl mx-auto">
        <nav className="relative flex items-center justify-between h-14 bg-white/80 backdrop-blur-md border rounded-full shadow-sm animate-fade-in-down">
          <div className="flex items-center gap-6 pl-4">
            <Link href="/" className="font-display text-xl font-semibold text-gray-900 hover:text-primary transition-colors">
              EasyTransport
            </Link>
            <div className="hidden lg:flex items-center gap-5">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium text-gray-600",
                    "hover:text-primary transition-colors",
                    "py-2",
                    "opacity-0 animate-fade-in-down",
                    index === 0 ? "animation-delay-150" :
                    index === 1 ? "animation-delay-300" :
                    index === 2 ? "animation-delay-450" :
                    "animation-delay-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-3 pr-4">
              <Button 
                variant="ghost" 
                className="text-sm font-medium text-gray-700 opacity-0 animate-fade-in-down animation-delay-750"
              >
                Accedi
              </Button>
              <ScrollButton
                targetId="calculator"
                className={cn(
                  "button-primary h-9",
                  "text-sm font-medium",
                  "opacity-0 animate-fade-in-down animation-delay-900 hover-glow"
                )}
              >
                Richiedi preventivo
              </ScrollButton>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden opacity-0 animate-fade-in-down animation-delay-150"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in">
            <div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg p-6 animate-slide-in-right">
              <div className="flex flex-col gap-6">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium text-gray-900 hover:text-primary transition-colors",
                      "opacity-0 animate-fade-in-right",
                      index === 0 ? "animation-delay-150" :
                      index === 1 ? "animation-delay-300" :
                      index === 2 ? "animation-delay-450" :
                      "animation-delay-600"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t pt-6 mt-6">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-lg font-medium mb-4 text-gray-700 opacity-0 animate-fade-in-right animation-delay-750"
                  >
                    Accedi
                  </Button>
                  <ScrollButton
                    targetId="calculator"
                    className="w-full button-primary h-12 opacity-0 animate-fade-in-right animation-delay-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Richiedi preventivo
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 