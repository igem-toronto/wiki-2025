"use client"
import React, { useEffect, useState } from "react"
import { SideBarHeading, SideBarHeadingProps } from "./ui/side-bar-heading"

const LEVELS = ["0", "1", "2"]

type HeadingLevel = {
  headingElement: Element
  subHeadingElements: HeadingLevel[]
}

const assignHeadingsToLevel = (nextHeading: Element | null, subHeadingElements: Element[][]):
  HeadingLevel[] => {
    if (!subHeadingElements[0] || !subHeadingElements[0].length) {
      return []
    }
    
    const end = nextHeading?.getBoundingClientRect().top
    const subHeadings: HeadingLevel[] = []

    let nextSubHeading = subHeadingElements[0][0]
    while (nextSubHeading && (!end || nextSubHeading.getBoundingClientRect().top < end)) {
      const nextLevel = assignHeadingsToLevel(
        subHeadingElements[0][1],
        subHeadingElements.slice(1)
      )
      subHeadings.push({
        headingElement: nextSubHeading,
        subHeadingElements: nextLevel
      })
      subHeadingElements[0].shift()
      nextSubHeading = subHeadingElements[0][0]
    }

    return subHeadings
  }

const getHeadingsPerLevel = (): HeadingLevel[] => {
  const headingsPerLevel = LEVELS.map(level =>
    Array.from(document.getElementsByClassName(`heading-level-${level}`))
  )

  return assignHeadingsToLevel(null, headingsPerLevel)
}

const SideBarHeadingWrapper: React.FC<{ heading: HeadingLevel, level: SideBarHeadingProps['level'] }> =
  ({ heading, level }) => {
    return (
      <div>
        <SideBarHeading level={level} href={`#${heading.headingElement.id}`}>
          {heading.headingElement.textContent}
        </SideBarHeading>
        {
          heading.subHeadingElements.map(subHeading =>
            <SideBarHeadingWrapper
              key={subHeading.headingElement.textContent}
              heading={subHeading}
              level={(Number(level) + 1).toString() as SideBarHeadingProps['level']}
            />
            )
        }
      </div>
    )
  }

export const SideBar = () => {
  const [headings, setHeadings] = useState<HeadingLevel[]>([])
  
  useEffect(() => {
    const headingsPerLevel = getHeadingsPerLevel()
    if (headingsPerLevel.length !== headings.length) {
      setHeadings(headingsPerLevel)
    }
  })

  return (
    <div className="w-full px-8 sticky top-32">
      {headings.map(heading =>
        <SideBarHeadingWrapper
          key={heading.headingElement.textContent}
          heading={heading}
          level='0'
        />
        )
      }
    </div>
  )
}