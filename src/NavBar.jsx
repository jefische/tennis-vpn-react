import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<nav className="navbar sticky-top navbar-expand-md bg-dark" data-bs-theme="dark">
			<div className="container-lg">
				<Link className="navbar-brand text-white" to="/">
					<img
						src="./assets/tennisball-bg-dark.png"
						alt="Logo"
						width="30"
						height="24"
						className="d-inline-block align-text-center"
					/>
					Total Tennis
				</Link>

				{/* toggle button for mobile nav */}
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* Menu of Tournmanets */}
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
					style={{ justifyContent: "center" }}
				>
					<ul className="navbar-nav mb-lg-0">
						<li className="nav-item ms-3">
							<NavLink className="nav-link" to="/australian-open">
								Australian Open
							</NavLink>
						</li>
						<li className="nav-item ms-3">
							<NavLink className="nav-link" to="/french-open">
								French Open
							</NavLink>
						</li>
						<li className="nav-item ms-3">
							<NavLink className="nav-link" to="/wimbledon">
								Wimbledon
							</NavLink>
						</li>
						<li className="nav-item ms-3">
							<NavLink className="nav-link" to="/us-open">
								US Open
							</NavLink>
						</li>
						<li className="nav-item dropdown ms-3">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								News
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										Indian Wells
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Miami Open
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Monte-Carlo Masters
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Madrid Open
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Rome
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Rogers Cup
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Western & Southern Open
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Rolex Shanghai Masters
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Paris Masters
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href="#">
										ATP Finals Turin
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										WTA Finals Cancun
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item ms-3">
							<a className="nav-link" href="Contact.html">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}