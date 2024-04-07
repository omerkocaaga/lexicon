import { getAllPosts } from "@/app/lib/api";
import Book from "@/app/ui/book";

export default function Home() {
	const books = getAllPosts();
	return (
		<main>
			{books.map((book) => {
				return <Book key={book.id} book={book} />;
			})}
		</main>
	);
}
