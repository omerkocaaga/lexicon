import Image from "next/image";
import IconButton from "@/app/ui/helper/icon-button";
import { Instagram, XPlatform } from "@/app/helper/icons";

export default function Footer() {
	return (
		<footer className="px-4 lg:px-8 py-16 lg:pt-16 lg:pb-24 bg-elevation">
			<Image
				src="/logo-light-open.svg"
				width={162}
				height={24}
				alt="Lexicon Logo"
				className="block dark:hidden pb-12"
			/>
			<Image
				src="/logo-dark-open.svg"
				width={162}
				height={24}
				alt="Lexicon Logo"
				className="hidden dark:block pb-12"
			/>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
				<div className="flex gap-4 flex-col">
					<div className="text-gray text-lg">Address</div>
					<div className="text-lg">
						Yenibosna Mah, 29 Ekim Cad,
						<br /> 26P/24, Bahçelievler / İstanbul
						<br />
						Türkiye
					</div>
				</div>
				<div className="flex gap-4 flex-col">
					<div className="text-gray text-lg">Info</div>
					<a href="/" className="underline underline-offset-4 text-lg">
						Terms & Conditions
					</a>
					<a href="/" className="underline underline-offset-4 text-lg">
						Privacy Policy
					</a>
					<a href="/" className="underline underline-offset-4 text-lg">
						Shipping
					</a>
					<a href="/" className="underline underline-offset-4 text-lg">
						Returns
					</a>
				</div>
				<div className="flex gap-12 flex-col">
					<div className="flex gap-4 flex-col">
						<div className="text-gray text-lg">Contact</div>
						<a href="/" className="underline underline-offset-4 text-lg">
							info@lexicon.publishing
						</a>
					</div>
					<div className="flex gap-4 flex-col">
						<div className="text-gray text-lg">Social</div>
						<div className="flex gap-6">
							<IconButton>
								<Instagram w={28} h={28} />
							</IconButton>
							<IconButton>
								<XPlatform w={28} h={28} />
							</IconButton>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
