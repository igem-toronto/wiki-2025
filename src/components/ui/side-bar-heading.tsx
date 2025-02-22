import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sideBarHeadingVariants = cva(
  "text-primary-background mt-2 block duration-300",
  {
    variants: {
      level: {
        "0": "text-2xl border-b-2 border-slate-300 py-2 my-4 hover:ml-2",
        "1": "text-lg mb-2 ml-4 hover:ml-6",
        "2": "text-md mb-2 ml-8 hover:ml-12",
      }
    },
    defaultVariants: {
      level: "0",
    },
  }
)

export interface SideBarHeadingProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof sideBarHeadingVariants> {
  href: string
}

const SideBarHeading: React.FC<SideBarHeadingProps> = (
  ({ className, level, children, ...props }) => {
    return (
      <a
        className={cn(sideBarHeadingVariants({ level, className }))}
        {...props}
      >
        {children}
      </a>
    )
  }
)
SideBarHeading.displayName = "SideBarHeading"

export { SideBarHeading, sideBarHeadingVariants }
