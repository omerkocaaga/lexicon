import Image from "next/image";
import IconButton from "@/app/ui/helper/icon-button";
import { Basket } from "@/app/helper/icons";
export default function Header() {
	return (
		<header className="flex item-center justify-between p-4 md:py-5 md:px-8">
			<Image
				src="/logo-light-open.svg"
				width={162}
				height={24}
				alt="Lexicon Logo"
				className="block dark:hidden"
			/>
			<Image
				src="/logo-dark-open.svg"
				width={162}
				height={24}
				alt="Lexicon Logo"
				className="hidden dark:block"
			/>
			<IconButton>
				<Basket w={32} h={32} s={2} className="stroke-focus" />
			</IconButton>
		</header>
	);
}
