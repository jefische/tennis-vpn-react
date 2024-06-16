export default function Navigation() {
	return (
		<nav
			className="navbar sticky-top navbar-expand-md bg-dark"
			data-bs-theme="dark"
		>
			<div className="container-lg">
				<a className="navbar-brand text-white" href="index.html">
					<img
						src="./assets/tennisball-bg-dark.png"
						alt="Logo"
						width="30"
						height="24"
						className="d-inline-block align-text-center"
					/>
					Total Tennis
				</a>

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
							<a className="nav-link" href="AO.html">
								Australian Open
							</a>
						</li>
						<li className="nav-item ms-3">
							<a className="nav-link" href="FO.html">
								French Open
							</a>
						</li>
						<li className="nav-item ms-3">
							<a className="nav-link" href="Wimby.html">
								Wimbledon
							</a>
						</li>
						<li className="nav-item ms-3">
							<a className="nav-link" href="USO.html">
								US Open
							</a>
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
