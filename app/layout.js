import { Inter } from "next/font/google";
import Header from "@/app/ui/layout/header";
import Footer from "@/app/ui/layout/footer";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Lexicon",
	description:
		"Lexicon is an independent publisher and online store specializing in design and visual culture.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
