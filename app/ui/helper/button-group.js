import IconButton from "./icon-button";
import { AddToBasket, Eye } from "@/app/helper/icons";

export default function ButtonGroup() {
	return (
		<div
			className={`absolute z-40 flex justify-center items-center gap-6 inset-0 w-full h-full group`}
		>
			<IconButton inGroup={true}>
				<Eye className="stroke-focus" w={32} h={32} s={2} />
			</IconButton>
			<IconButton inGroup={true}>
				<AddToBasket className="stroke-focus" w={32} h={32} s={2} />
			</IconButton>
		</div>
	);
}
