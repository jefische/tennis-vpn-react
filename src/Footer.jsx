import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Footer() {
	const location = useLocation();
	return (
		<>
			{(location.pathname === "/contact") | (location.pathname === "/grand-slam-results") ? (
				<footer
					className="d-flex justify-content-center align-items-center fixed-bottom bg-dark"
					style={{ height: "40px", color: "white" }}
				>
					&#169; 2024 totaltennis.tv
				</footer>
			) : (
				<footer className="d-flex justify-content-center align-items-center bg-dark" style={{ height: "40px", color: "white" }}>
					&#169; 2024 totaltennis.tv
				</footer>
			)}
		</>
	);
}
