/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
	addUtilities({
		".backface-visible": {
			"backface-visibility": "visible",
		},
		".backface-hidden": {
			"backface-visibility": "hidden",
		},
	});
});
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				focus: "rgba(var(--color-focus), <alpha-value>)",
				gray: "rgba(var(--color-gray), <alpha-value>)",
				alert: "rgba(var(--color-alert), <alpha-value>)",
				invert: "rgba(var(--color-invert), <alpha-value>)",
				disabled: "rgba(var(--color-disabled), <alpha-value>)",
				background: "rgba(var(--color-background), <alpha-value>)",
				elevation: "rgba(var(--color-elevation), <alpha-value>)",
				brand: "rgba(var(--color-brand), <alpha-value>)",
			},
		},
	},
	plugins: [require("tailwindcss-inner-border"), backfaceVisibility],
};
