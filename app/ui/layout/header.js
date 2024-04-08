import Image from "next/image";
import { Basket } from "@/app/helper/icons";
export default function Header() {
	return (
		<header className="flex item-center justify-between px-4 py-6 md:py-5 md:px-8">
			<div className="relative w-full group  cursor-pointer">
				<Image
					src="/logo-open.svg"
					width={200}
					height={22}
					alt="Lexicon Logo"
					className="relative  -translate-y-1/2 top-1/2  z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-out "
				/>
				<Image
					src="/logo-closed.svg"
					width={200}
					height={22}
					alt="Lexicon Logo"
					className="absolute  -translate-y-1/2 top-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out "
				/>
			</div>

			<Basket w={36} h={36} s={1.5} className="stroke-focus cursor-pointer" />
		</header>
	);
}
