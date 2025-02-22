import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const paragraphVariants = cva(
  "text-primary-background",
  {
    variants: {
    variant: {
        "default": "text-md px-2",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
}

const Paragraph: React.FC<ParagraphProps> = (
  ({ className, variant, children, ...props }) => {
    return (
      <p
        className={cn(paragraphVariants({ variant, className }))}
        {...props}
      >
        {children}
      </p>
    )
  }
)
Paragraph.displayName = "Paragraph"

export { Paragraph, paragraphVariants as headingVariants }
