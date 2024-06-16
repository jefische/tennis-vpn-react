function ActionButton({ vpnLink, text }) {
	return (
		<div id="red-button-one" className="d-grid">
			<a
				className="btn btn-lg rounded-pill btn-danger mt-4 mx-auto"
				href={vpnLink}
			>
				<span>{text}</span>
			</a>
		</div>
	);
}

export default function ActionCard({ vpnLink }) {
	return (
		<>
			<div className="d-flex">
				<div className="card bg-info bg-opacity-25 central-card">
					<div className="card-body">
						<p>
							<span>Quick Guide:</span> To bypass geo-restriction
							policies, you will need to use a VPN. We recommend{" "}
							<a href={vpnLink}>ExpressVPN</a>, the highest
							quality VPN for security and speed.
						</p>
						<hr />

						<ol>
							<li>
								<span>Subscribe</span> to{" "}
								<a href={vpnLink}>ExpressVPN</a> then download
								and install the program.
							</li>
							<li>
								<span>Relocate</span> yourself to the hosting
								country.
							</li>
							<li>
								<span>Login</span> to an online streaming
								service or official broadcast app.
							</li>
							<li>
								<span>Enjoy</span> live streaming your favorite
								matches!
							</li>
						</ol>
					</div>
				</div>

				<div
					id="evpn-logo"
					className="w-25 d-none d-md-flex ms-3"
				></div>
			</div>

			<ActionButton
				vpnLink={vpnLink}
				text="Stream tennis with ExpressVPN"
			/>
		</>
	);
}
