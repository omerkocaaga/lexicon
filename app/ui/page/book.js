"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Price from "@/app/ui/helper/price";
import NewBadge from "@/app/ui/helper/new-badge";
import ButtonGroup from "@/app/ui/helper/button-group";

export default function Book({ book }) {
	const [display, setDisplay] = useState(false);
	const showButton = (e) => {
		e.preventDefault();
		setDisplay(true);
	};

	const hideButton = (e) => {
		e.preventDefault();
		setDisplay(false);
	};
	let { title, priceBefore, price, currency, new: isNew, images = [] } = book;
	return (
		<Link href="/" className="relative">
			{isNew && <NewBadge />}

			<figure
				className="relative"
				onMouseEnter={(e) => showButton(e)}
				onMouseLeave={(e) => hideButton(e)}
			>
				{images.map((image) => {
					let { id, src, alt } = image;
					return (
						<Image
							key={id}
							src={src}
							alt={alt}
							width={1000}
							height={1000}
							className={`${
								id === 1
									? "absolute inset-0 z-10"
									: "relative z-20 hover:opacity-0 transition-opacity duration-700 ease-out"
							}`}
						/>
					);
				})}
				{display && <ButtonGroup />}
			</figure>
			<div className="pt-3 px-3 flex gap-12">
				<div className="flex-1 text-lg">{title}</div>
				<Price currency={currency} price={price} priceBefore={priceBefore} />
			</div>
		</Link>
	);
}
