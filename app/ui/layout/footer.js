import Image from "next/image";
import IconButton from "@/app/ui/helper/icon-button";
import { Instagram, XPlatform } from "@/app/helper/icons";

export default function Footer() {
	return (
		<footer className="px-4 md:px-8 py-16 lg:pt-16 lg:pb-24 bg-elevation">
			<div className="relative w-full group pb-12 cursor-pointer">
				<Image
					src="/logo-open.svg"
					width={200}
					height={22}
					alt="Lexicon Logo"
					className="relative z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-out "
				/>
				<Image
					src="/logo-closed.svg"
					width={200}
					height={22}
					alt="Lexicon Logo"
					className="absolute top-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out "
				/>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
				<div className="flex gap-12 flex-col">
					<div className="flex gap-4 flex-col">
						<div className="text-gray xl:text-lg">Address</div>
						<div className="xl:text-lg">
							Yenibosna Mah, 29 Ekim Cad,
							<br /> 26P/24, Bahçelievler / İstanbul
							<br />
							Türkiye
						</div>
					</div>
					{/* <ThemeSwitch /> */}
				</div>
				<div className="flex gap-4 flex-col">
					<div className="text-gray xl:text-lg">Info</div>
					<a href="/" className="underline underline-offset-4 xl:text-lg">
						Terms & Conditions
					</a>
					<a href="/" className="underline underline-offset-4 xl:text-lg">
						Privacy Policy
					</a>
					<a href="/" className="underline underline-offset-4 xl:text-lg">
						Shipping
					</a>
					<a href="/" className="underline underline-offset-4 xl:text-lg">
						Returns
					</a>
				</div>
				<div className="flex gap-12 flex-col">
					<div className="flex gap-4 flex-col">
						<div className="text-gray xl:text-lg">Contact</div>
						<a href="/" className="underline underline-offset-4 xl:text-lg">
							info@lexicon.publishing
						</a>
					</div>
					<div className="flex gap-4 flex-col">
						<div className="text-gray xl:text-lg">Social</div>
						<div className="flex gap-6">
							<Instagram w={28} h={28} />
							<XPlatform w={28} h={28} />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
