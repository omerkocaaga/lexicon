import IconButton from "./icon-button";
import { AddToBasket, Eye } from "@/app/helper/icons";

export default function ButtonGroup() {
	return (
		<div className="absolute z-40 flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-6">
			<IconButton>
				<Eye className="stroke-focus" w={32} h={32} s={2} />
			</IconButton>
			<IconButton>
				<AddToBasket className="stroke-focus" w={32} h={32} s={2} />
			</IconButton>
		</div>
	);
}
