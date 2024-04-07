import IconButton from "@/app/ui/helper/icon-button";
import { ArrowRight } from "@/app/helper/icons";

export default function Newsletter() {
	return (
		<div className="px-4 md:px-8 w-full lg:w-8/12 py-32">
			<h1 className=" text-3xl lg:text-4xl font-normal lg:font-light leading-normal lg:leading-normal pb-24 ">
				Join the newsletter to learn about new book launches and exclusive offers.
			</h1>
			<form className="w-full relative">
				<input
					type="email"
					placeholder="Your e-mail"
					className="bg-background pb-6 pr-20 rounded-none border-gray border-b-[1px] focus:outline-none focus:border-focus font-normal lg:font-light  leading-normal lg:leading-normal text-3xl lg:text-4xl placeholder: text-disabled w-full"
				/>
				<div className="absolute right-0 bottom-6">
					<IconButton>
						<ArrowRight className="stroke-focus" />
					</IconButton>
				</div>
			</form>
		</div>
	);
}
