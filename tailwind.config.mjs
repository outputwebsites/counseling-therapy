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
				lifeMain: "#E5A134", // hovered links, primary (daisyUI)
				lifeMainDark: "#CC9E16", // links, secondary (daisyUI)
				lifeMainDarker: "#A3730D", // active links, focused links, info (daisyUI)
				lifeBackground: "#FFF9F2", // background color for header and footer
				lifeBorder: "#F8F2EC" // border color for header and footer
			}
		}
	},
	plugins: [],
}
