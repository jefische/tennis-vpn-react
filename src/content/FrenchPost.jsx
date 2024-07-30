import ActionButton from "../components/ActionButton";
import QuickGuide from "../components/QuickGuide";
import ActionTable from "../components/ActionTable";
import ActionCard from "../components/ActionCard";
import { streamingDataFO } from "../../tableData";
import { frenchSchedule } from "../../scheduleData";
import { vpn } from "../../vpnLinks";
import { frenchChampionsATP, frenchChampionsWTA } from "../../championsData";

export function FrenchPost() {
	return (
		<>
			<br />
			<p>
				The second gram slam of the season and one of the most anticipated tournaments of the year is upon us,{" "}
				<span>Roland Garros!</span> Much of the anticipation this year is centered around{" "}
				<span>Rafael Nadal's</span> return to competitive match play and what many have speculated as likely his
				last French Open as a player.
			</p>
			<p>
				The tournament will <span>start on Sunday, May 26th</span> and run until Sunday June 9th.
			</p>

			<p>
				If you are located in Australia, then you can watch the tournament for{" "}
				<span>free on Channel 9 or 9Now</span>. If you <span>live outside Australia</span> then unfortunately
				you may not have access to a live broadcast of the tournaments due to <span>geo-restrictions</span> or{" "}
				<span>blackout policies</span> which prevent certain locations from streaming events because of TV
				broadcasting rights.
			</p>

			<p>
				Fortunately, you can bypass these restrictions using a VPN and{" "}
				<span>masking your actual IP address</span>. A VPN will change your IP address to a different location
				of your choosing and encrypt your data for safety. A high quality VPN recommended by many experts is{" "}
				<span>ExpressVPN</span> due to its reliability, speed, and service with more than{" "}
				<span>3,000 servers</span> located in <span>94 countries</span>.
			</p>

			<QuickGuide
				vpnLink={vpn.FOLink}
				bullet1="then download and install on your device."
				bullet2="yourself to an Australian server."
				bullet3="to 9Now or create an account if needed (you may need an Australian postal code, e.g. 2000 or 3010)"
			/>
			<ActionButton vpnLink={vpn.FOLink} text="Stream French Open with ExpressVPN" id="red-button-one" />

			<h2 id="best-streaming-options" className="mt-5">
				Best streaming services to watch the French Open
			</h2>
			<br />
			<p>
				There are a few services you can use to watch the French Open depending on your location. The best
				option is <span>9Now</span> as it is a <span>completely free streaming service</span>. However, for
				users with a different preference here are other great options:
			</p>
			<ActionTable tableData={streamingDataFO} />
			<ActionButton vpnLink={vpn.streamingServicesLink} text="Unblock streaming with ExpressVPN" />

			<h2 className="mt-5">Watching the French Open on your device</h2>
			<br />
			<p>
				You can catch all of the French Open online with any device including{" "}
				<span>Android, iOS, Windows, Mac, Linux and Smart TVs</span>.
			</p>

			<p>
				<a href={vpn.smartTVLink}>ExpressVPN</a> supported Smart TVs include:
			</p>

			<ul>
				<li>Samsung TV</li>
				<li>Apple TV</li>
				<li>Amazon Fire TV and Fire Stick</li>
				<li>Roku</li>
				<li>Google Chromecast</li>
				<li>Android TV</li>
				<li>Nvidia Shield</li>
			</ul>

			<p>Follow these easy steps to stream the French Open on your device:</p>

			<ActionCard>
				<li className="pb-1">
					Download the <a href={vpn.smartTVLink}>ExpressVPN</a> app directly to your device and login
				</li>
				<li className="pb-1">Connect to a server in Australia</li>
				<li className="pb-1">Login to 9Now or another streaming service in Australia of your choice.</li>
				<li className="pb-1">Enjoy live streaming the matches!</li>
			</ActionCard>

			<ActionButton vpnLink={vpn.FOLink} text="Stream French Open on your device" />

			<p className="pt-5">
				Note if your Smart TV doesn’t directly support the ExpressVPN app you can get around this by connecting
				your VPN straight to your <a href={vpn.routerLink}>Wi-Fi router</a>. Simply access your router’s admin
				dashboard and connect to your <span>VPN network</span>.
			</p>

			<h2 className="mt-5">2024 French Open Broadcast Schedule (USA)</h2>
			<br />
			<ActionTable tableData={frenchSchedule} />

			<div className="accordion" id="accordionPanelsStayOpenExample">
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseOne"
							aria-expanded="true"
							aria-controls="panelsStayOpen-collapseOne"
						>
							View Past Champions - ATP
						</button>
					</h2>
					<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
						<div className="accordion-body">
							<ActionTable tableData={frenchChampionsATP} />
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							View Past Champions - WTA
						</button>
					</h2>
					<div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
						<div className="accordion-body">
							<ActionTable tableData={frenchChampionsWTA} />
						</div>
					</div>
				</div>
			</div>
			<div className="white-space" style={{ height: "80px", color: "white" }}></div>
		</>
	);
}
