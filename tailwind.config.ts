import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				secondary: {
					DEFAULT: '#727C73',
					foreground: '#4c554d',
				},

			},
			backgroundImage: {
				"banner-image": "url('/assets/banner.webp')"
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
