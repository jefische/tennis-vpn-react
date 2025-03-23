export default function Footer({ fixedBottom }) {
	return (
		<>
			<footer
				className={`d-flex justify-content-center align-items-center bg-dark ${fixedBottom ? "fixed-bottom" : ""}`}
				style={{ height: "40px", color: "white" }}
			>
				&#169; 2025 totaltennis.tv
			</footer>
		</>
	);
}
