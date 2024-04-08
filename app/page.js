import { getAllPosts } from "@/app/lib/api";

import Welcome from "@/app/ui/page/welcome";
import Books from "@/app/ui/page/books";
import Newsletter from "@/app/ui/page/newsletter";

export default function Home() {
	const books = getAllPosts();
	return (
		<main>
			<Welcome />
			<Books books={books} />
			<Newsletter />
		</main>
	);
}
