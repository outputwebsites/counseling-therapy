/** @type {import("tailwindcss").Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Albert Sans Variable", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				lifeMain: "#0284C7", // sky-600 hovered links, primary (daisyUI)
				lifeMainDark: "#075985", // sky-800 - links, secondary (daisyUI)
				lifeMainDarker: "#0C4A6E", // sky-900 active links, focused links, info (daisyUI)
				lifeBackground: "#F5EEDF", // like light tan - background color for header and footer
				lifeBorder: "#F8F2EC" // like light grey - border color for header and footer
			}
		}
	},
	plugins: [],
}
