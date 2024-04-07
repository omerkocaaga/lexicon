export default function IconButton({ children }) {
	return (
		<button className="p-4 inner-border-[1.5px] border-focus rounded-full bg-background/20 hover:bg-gray/50 backdrop-blur-xl transition-all duration-500 ease-out">
			{children}
		</button>
	);
}
