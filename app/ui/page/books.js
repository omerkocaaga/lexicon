import Book from "@/app/ui/helper/book";

export default function Books({ books }) {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4 md:m-8">
			{books.map((book) => {
				return <Book key={book.id} book={book} />;
			})}
		</section>
	);
}
