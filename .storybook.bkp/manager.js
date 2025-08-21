import { addons } from "@storybook/manager-api"
import { themes } from "@storybook/theming"

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: "Colheita Digital Design System",
    brandUrl: "https://colheita-digital.vercel.app",
    brandImage: undefined,
    brandTarget: "_self",
    colorPrimary: "#22c55e",
    colorSecondary: "#16a34a",
  },
})
