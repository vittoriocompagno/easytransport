import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

const navigation = {
  solutions: [
    { name: "Spedizioni Nazionali", href: "#" },
    { name: "Spedizioni Internazionali", href: "#" },
    { name: "Tracking Spedizioni", href: "#" },
    { name: "Servizi Express", href: "#" },
  ],
  company: [
    { name: "Chi Siamo", href: "#about" },
    { name: "Lavora con Noi", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contatti", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Termini di Servizio", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-white border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-display font-semibold">
              EasyTransport
            </Link>
            <p className="text-sm leading-6">
              Soluzioni di trasporto innovative per le aziende moderne.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-gray-400"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Soluzioni</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Azienda</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Legale</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 sm:mt-20">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} EasyTransport. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
} 