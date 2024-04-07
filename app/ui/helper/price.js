export default function Price(props) {
	const { currency, price, priceBefore } = props;
	return (
		<div className="flex flex-col gap-1 align-right items-end">
			<div className={`text-lg ${typeof priceBefore !== "undefined" ? "text-alert" : ""}`}>
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
