import { getAllPosts } from "@/app/lib/api";
import Book from "@/app/ui/page/book";
import Welcome from "@/app/ui/page/welcome";
import Newsletter from "@/app/ui/page/newsletter";

export default function Home() {
	const books = getAllPosts();
	return (
		<main>
			<section className="max-w-screen-2xl m-auto">
				<Welcome />
			</section>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4 md:m-8">
				{books.map((book) => {
					return <Book key={book.id} book={book} />;
				})}
			</section>
			<section className="max-w-screen-2xl m-auto">
				<Newsletter />
			</section>
		</main>
	);
}
