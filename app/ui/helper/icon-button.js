export default function IconButton({ children, inGroup }) {
	return (
		<button
			className={`p-4 inner-border-[1.5px] flex-none grow-0 border-focus rounded-full bg-background/20 backface-hidden  hover:bg-disabled/30 backdrop-blur-xl ${
				inGroup ? "opacity-0" : "opacity-100"
			} group-hover:opacity-100 transition-all duration-500 ease-out`}
		>
			{children}
		</button>
	);
}
