import type { ReactElement } from "react"
import { render, type RenderOptions } from "@testing-library/react"

// Custom render function that includes providers if needed
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => render(ui, { ...options })

export * from "@testing-library/react"
export { customRender as render }

// Common test data
export const mockHeroContent = {
  title: "Test Title",
  subtitle: "Test Subtitle",
  description: "Test description for hero section",
  ctaText: "Test CTA",
  ctaLink: "#test",
}

export const mockProblemContent = {
  title: "Test Problems",
  description: "Test problem description",
  problems: [
    {
      title: "Problem 1",
      description: "Description 1",
      icon: "🔥",
    },
    {
      title: "Problem 2",
      description: "Description 2",
      icon: "💡",
    },
  ],
}

export const mockBenefitsContent = {
  title: "Test Benefits",
  description: "Test benefits description",
  benefits: [
    {
      title: "Benefit 1",
      description: "Benefit description 1",
      icon: "🚀",
    },
    {
      title: "Benefit 2",
      description: "Benefit description 2",
      icon: "⭐",
    },
  ],
}

export const mockCTAContent = {
  title: "Test CTA Title",
  description: "Test CTA description",
  primaryCta: {
    text: "Primary Action",
    link: "/primary",
  },
  secondaryCta: {
    text: "Secondary Action",
    link: "/secondary",
  },
}
