import { Link, NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

export default function NavBar() {
	const navContainerRef = useRef(null);
	const menuDivRef = useRef(null);

	function toggleNav() {
		// Toggle the dropdown to close when an option is selected
		// Found working solution: https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-navbar-on-click
		const menuToggle = document.getElementById("navbarSupportedContent");
		const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, { toggle: false });

		const buttonToggle = document.querySelector("button.navbar-toggler");

		// Check for opened menu on mobile and then call toggle.
		if (buttonToggle.getAttribute("aria-expanded") == "true") {
			bsCollapse.toggle();
		}
	}

	function handleDropdownToggle(e) {
		// Toggle the dropdown to close when clicking outside the menu area.
		// Found working solution: https://medium.com/@alexandprivate/a-button-dropdown-in-react-and-not-3fc16525da62
		const menuToggle = document.getElementById("navbarSupportedContent");
		const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, { toggle: false });

		let div_container = menuDivRef.current.className;
		let reg = new RegExp("show");

		if (!e.target.closest(`.${navContainerRef.current.className}`) & reg.test(div_container)) {
			bsCollapse.toggle();
		}
	}

	useEffect(() => {
		document.addEventListener("click", handleDropdownToggle);
		return () => {
			document.removeEventListener("click", handleDropdownToggle);
		};
	});
	return (
		<nav className="navbar sticky-top navbar-expand-md bg-dark" data-bs-theme="dark">
			<div className="container-lg" ref={navContainerRef}>
				<Link className="navbar-brand text-white" to="/">
					<img
						src={"tennisball-bg-dark.png"}
						alt="Logo"
						width="30"
						height="24"
						className="d-inline-block align-text-center me-2"
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
					ref={menuDivRef}
					style={{ justifyContent: "space-around" }}
				>
					<ul className="navbar-nav mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" to="/australian-open" onClick={toggleNav}>
								Australian Open
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/french-open" onClick={toggleNav}>
								French Open
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/wimbledon" onClick={toggleNav}>
								Wimbledon
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/us-open" onClick={toggleNav}>
								US Open
							</NavLink>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								data-bs-auto-close="true"
								aria-expanded="false"
							>
								More
							</a>
							<ul className="dropdown-menu" style={{ width: "fit-content" }}>
								<li>
									{/* <Link className="dropdown-item" to="/national-bank-open">
										National Bank Open
									</Link> */}
									<Link className="dropdown-item" to="/grand-slam-results" onClick={toggleNav}>
										Tournament Results
									</Link>
									{/* <a className="dropdown-item" href="javascript:void(0)"> */}
									{/* Coming Soon */}
									{/* Indian Wells */}
									{/* </a> */}
								</li>
								{/* <li>
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
								</li> */}
							</ul>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/contact" onClick={toggleNav}>
								Contact
							</NavLink>
						</li>
					</ul>
					{/* navbar-nav */}
				</div>
				{/* collapse navbar-collapse */}
			</div>
			{/* container-lg */}
		</nav>
	);
}
