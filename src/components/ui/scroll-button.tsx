"use client"

import { Button } from "@/components/ui/button"
import { type ButtonProps } from "@/components/ui/button"

interface ScrollButtonProps extends ButtonProps {
  targetId: string
}

export function ScrollButton({ targetId, children, ...props }: ScrollButtonProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
} 