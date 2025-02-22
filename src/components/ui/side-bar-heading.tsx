import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sideBarHeadingVariants = cva(
  "text-primary-background mt-2",
  {
    variants: {
      level: {
        "0": "text-2xl border-b-2 border-slate-300 py-2 mb-3",
        "1": "text-lg mb-3",
        "2": "text-md mb-3",
      }
    },
    defaultVariants: {
      level: "0",
    },
  }
)

export interface SideBarHeadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sideBarHeadingVariants> {
}

const SideBarHeading: React.FC<SideBarHeadingProps> = (
  ({ className, level, children, ...props }) => {
    return (
      <div
        className={cn(sideBarHeadingVariants({ level, className }))}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SideBarHeading.displayName = "SideBarHeading"

export { SideBarHeading, sideBarHeadingVariants }
