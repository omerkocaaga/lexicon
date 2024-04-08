import Price from "@/app/ui/helper/price";

export default function BookInfo({ title, currency, price, priceBefore }) {
	return (
		<div className="px-0 py-3 xl:p-3 flex gap-12">
			<div className="flex-1 xl:text-lg text-focus/75 group-hover:text-focus transition-all duration-500 ease-out">
				{title}
			</div>
			<Price currency={currency} price={price} priceBefore={priceBefore} />
		</div>
	);
}
