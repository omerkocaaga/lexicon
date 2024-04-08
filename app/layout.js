import localFont from "next/font/local";
import Header from "@/app/ui/layout/header";
import Footer from "@/app/ui/layout/footer";
import "@/app/globals.css";

const inter = localFont({
	src: "font/InterVariable.woff2",
	display: "swap",
	variable: "--font-inter",
});

export const metadata = {
	title: "Lexicon",
	description:
		"Lexicon is an independent publisher and online store specializing in design and visual culture.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
