"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { ScrollButton } from "@/components/ui/scroll-button"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Servizi", href: "#services" },
  { name: "Come funziona", href: "#features" },
  { name: "Preventivo", href: "#calculator" },
  { name: "Contatti", href: "#contact" },
]
//lines for git
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-5xl mx-auto">
        <nav className="relative flex items-center justify-between h-14 bg-white/80 backdrop-blur-md border rounded-full shadow-sm animate-fade-in-down">
          <div className="flex-1 flex items-center justify-between px-4">
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
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-3">
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
                className="lg:hidden w-9 h-9 opacity-0 animate-fade-in-down animation-delay-150 bg-white/80 hover:bg-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <div 
              className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm" 
              onClick={() => setIsMenuOpen(false)} 
            />
            <div className="fixed top-4 left-4 right-4 max-h-[calc(100vh-2rem)] bg-white rounded-3xl shadow-xl animate-scale-in overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b">
                  <span className="font-display text-xl font-semibold text-gray-900">
                    <span className="text-primary">Easy</span>Transport
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-9 h-9 rounded-full hover:bg-primary/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <div className="grid gap-2 p-2">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "flex items-center h-12 px-4 rounded-xl text-lg font-medium text-gray-900",
                          "hover:bg-primary/5 hover:text-primary transition-colors",
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
                  </div>
                </div>
                <div className="p-4">
                  <div className="p-4 rounded-2xl bg-gray-50 space-y-4">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-center text-lg font-medium text-gray-700 h-12 rounded-xl hover:bg-white opacity-0 animate-fade-in-right animation-delay-750"
                    >
                      Accedi
                    </Button>
                    <ScrollButton
                      targetId="calculator"
                      className="w-full button-primary h-12 rounded-xl opacity-0 animate-fade-in-right animation-delay-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Richiedi preventivo
                    </ScrollButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 