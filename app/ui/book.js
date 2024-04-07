export default function Book(props) {
	const {
		book: { title },
	} = props;
	console.log(title);
	return <div>{title}</div>;
}
