import { type VariantProps, cva } from "class-variance-authority"

export const fadeIn = cva(
  "opacity-0 translate-y-8",
  {
    variants: {
      direction: {
        up: "animate-fade-in-up",
        down: "animate-fade-in-down",
        left: "animate-fade-in-left",
        right: "animate-fade-in-right",
      },
      delay: {
        none: "animation-delay-0",
        sm: "animation-delay-150",
        md: "animation-delay-300",
        lg: "animation-delay-450",
        xl: "animation-delay-600",
      },
      duration: {
        fast: "animation-duration-500",
        normal: "animation-duration-700",
        slow: "animation-duration-1000",
      }
    },
    defaultVariants: {
      direction: "up",
      delay: "none",
      duration: "normal"
    }
  }
) 