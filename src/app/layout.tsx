import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { inter, poppins } from "@/lib/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "EasyTransport - Trasporti Semplificati",
  description: "Ottieni preventivi istantanei, traccia le tue spedizioni in tempo reale e sperimenta un trasporto senza problemi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning className={cn(
      inter.variable,
      poppins.variable,
    )}>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        "selection:bg-blue-600/10 selection:text-blue-600",
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
