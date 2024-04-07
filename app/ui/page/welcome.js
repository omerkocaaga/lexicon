import Underline from "@/app/helper/underline";

export default function Welcome() {
	return (
		<h1 className="px-4 md:px-8 w-full lg:w-8/12 text-3xl lg:text-4xl font-normal lg:font-light leading-normal lg:leading-normal py-32 ">
			Lexicon is an <Underline>independent publisher</Underline> and online store specializing in
			design and visual culture.
		</h1>
	);
}
