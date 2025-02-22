import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva(
  "text-primary-background mt-8",
  {
    variants: {
      level: {
        "0": "heading-level-0 text-4xl border-b-2 border-slate-300 py-2 mb-3",
        "1": "heading-level-1 text-3xl mb-3",
        "2": "heading-level-2 text-xl mb-3",
      }
    },
    defaultVariants: {
      level: "0",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headingVariants> {
  children: string
}

const Heading: React.FC<HeadingProps> = (
  ({ className, level, children, ...props }) => {
    return (
      <div
        className={cn(headingVariants({ level, className }))}
        id={children.toLowerCase().replaceAll(' ', '-')}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
