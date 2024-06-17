export default function Posts({ title, id, children }) {
	return (
		<>
			<div id={id} className="bposts">
				<h1 className="mt-4">{title}</h1>
				<br />
				{children}
			</div>
		</>
	);
}
