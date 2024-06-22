export default function QuickGuide({
	vpnLink,
	bullet1 = "then download and install the program.",
	bullet2 = "yourself to the hosting country.",
	bullet3 = "to an online streaming service or official broadcast app.",
	bullet4 = "live streaming your favorite matches!",
}) {
	return (
		<>
			<div className="d-flex">
				<div className="card bg-info bg-opacity-25 central-card">
					<div className="card-body">
						<p>
							<span>Quick Guide:</span> To bypass geo-restriction policies, you will need to use a VPN. We
							recommend <a href={vpnLink}>ExpressVPN</a>, the highest quality VPN for security and speed.
						</p>
						<hr />

						<ol>
							<li>
								<span>Subscribe</span> to <a href={vpnLink}>ExpressVPN</a> {bullet1}
							</li>
							<li>
								<span>Relocate</span> {bullet2}
							</li>
							<li>
								<span>Login</span> {bullet3}
							</li>
							<li>
								<span>Enjoy</span> {bullet4}
							</li>
						</ol>
					</div>
				</div>

				<div id="evpn-logo" className="w-25 d-none d-md-flex ms-3"></div>
			</div>
		</>
	);
}
