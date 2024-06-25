export default function ActionButton({ vpnLink, text, id = null }) {
	return (
		<div id={id} className="d-grid">
			<a className="btn btn-lg rounded-pill btn-danger btn-hover mt-4 mx-auto" href={vpnLink}>
				<span>{text}</span>
			</a>
		</div>
	);
}
