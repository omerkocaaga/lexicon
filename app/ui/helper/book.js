import Link from "next/link";
import Image from "next/image";
import NewBadge from "@/app/ui/helper/new-badge";
import ButtonGroup from "@/app/ui/helper/button-group";
import BookInfo from "@/app/ui/helper/book-info";

export default function Book({ book }) {
	let { title, priceBefore, price, currency, new: isNew, images = [], id } = book;
	return (
		<Link href="/" className={`relative group ${id === 0 && "col-span-1 lg:col-span-3 lg:pb-8"}`}>
			<figure className={`relative ${id === 0 && "lg:grid grid-cols-2"}`}>
				{images.map((image) => {
					let { id: imageID, src, alt } = image;
					return (
						<Image
							key={imageID}
							src={src}
							alt={alt}
							width={1200}
							height={1200}
							className={`transition-opacity duration-500 ease-out max-w-100 h-auto ${
								imageID === 1 && id !== 0 && "absolute inset-0 z-10"
							} ${imageID === 1 && id === 0 && "absolute lg:static inset-0 z-10 lg:flex-1"} ${
								imageID === 0 && "relative z-20"
							} ${id !== 0 && imageID === 0 && "hover:opacity-0 "} ${
								id === 0 &&
								imageID === 0 &&
								"hover:opacity-0 lg:hover:opacity-100 lg:transition-opacity"
							}
							${imageID === 0 && id !== 0 && "group-hover:opacity-0"}
							${imageID === 0 && id === 0 && "group-hover:opacity-0 lg:group-hover:opacity-100"}
							${imageID === 0 && id === 0 && "lg:flex-1"}

							`}
						/>
					);
				})}
				{isNew && <NewBadge />}
				<ButtonGroup />
			</figure>
			<BookInfo title={title} currency={currency} price={price} priceBefore={priceBefore} />
		</Link>
	);
}
