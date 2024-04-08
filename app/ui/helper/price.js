export default function Price(props) {
	const { currency, price, priceBefore } = props;
	return (
		<div className="flex flex-col gap-1 align-right items-end">
			<div
				className={`xl:text-lg ${
					typeof priceBefore !== "undefined"
						? "text-alert"
						: "text-focus/75 group-hover:text-focus transition-all duration-500 ease-out"
				}`}
			>
				{currency} {price.toFixed(2)}
			</div>
			{typeof priceBefore !== "undefined" && (
				<div className="text-sm line-through text-gray">
					{currency} {priceBefore.toFixed(2)}
				</div>
			)}
		</div>
	);
}
