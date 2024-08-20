import QuickGuide from "../components/QuickGuide";
import ActionButton from "../components/ActionButton";
import ActionTable from "../components/ActionTable";
import ActionCard from "../components/ActionCard";
import { streamingDataUSO } from "../../data/tableData";
import { USOSchedule } from "../../data/scheduleData";
import { vpn } from "../../data/vpnLinks";
import { USOChampionsATP, USOChampionsWTA } from "../../data/championsData";

export function USOpenPost() {
	return (
		<>
			<br />
			<p>
				The final grand slam of the year, the <span>US Open</span>, will take place in electric New York City.
				Coco Gauff will look to defend her grand slam title after what's been another consistent year so far
				posting a 35-11 win-loss record through Wimbledon. On the men's side, Novak Djokovic will aim to defend
				his title and try to add to his record breaking 24 grand slam titles.
			</p>

			<p>
				The tournament begins <span>Monday, August 26th</span> and runs until Sunday, September 8th.
			</p>

			<p>
				<span>ESPN owns the broadcasting rights for the 2024 US Open,</span> meaning the it will be difficult to
				watch matches anywhere outside of the US. This is due to <span>geo-restrictions</span> and{" "}
				<span>blackout policies</span> which prevent certain locations from streaming the tournament.
				Fortunately, users can bypass these restrictions by <span>masking your ip address with a VPN.</span>
			</p>

			<p>
				A high quality VPN recommended by many users around the world is <span>ExpressVPN</span> due to its
				reliability, speed, and service with more than <span>3,000 servers</span> located in{" "}
				<span>94 countries</span>.
			</p>

			<QuickGuide
				vpnLink={vpn.USOLink}
				bullet1="then download and install on your device."
				bullet2="yourself to an Australian server."
				bullet3="to 9Now or create an account if needed (you may need an Australian postal code, e.g. 2000 or 3010)"
			/>
			<ActionButton vpnLink={vpn.USOLink} text="Stream US Open with ExpressVPN" id="red-button-one" />

			<h2 id="best-streaming-options" className="mt-5">
				Best streaming services to watch the US Open
			</h2>
			<br />
			<p>
				There are a few services you can use to watch the US Open depending on your location. A great option is{" "}
				<span>9Now</span> as it's <span>complete free</span>. For users with a different preference here are
				other great options:
			</p>
			<ActionTable tableData={streamingDataUSO} />
			<ActionButton vpnLink={vpn.streamingServicesLink} text="Unblock streaming with ExpressVPN" />

			<h2 className="mt-5">Watching the US Open on your device</h2>
			<br />
			<p>
				You can catch all of the US Open online with any device including{" "}
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

			<p>Follow these easy steps to stream the US Open on your device:</p>

			<ActionCard>
				<li className="pb-1">
					Download the <a href={vpn.smartTVLink}>ExpressVPN</a> app directly to your device and login
				</li>
				<li className="pb-1">Connect to a server in Australia</li>
				<li className="pb-1">Login to 9Now or another streaming service in Australia of your choice.</li>
				<li className="pb-1">Enjoy live streaming the matches!</li>
			</ActionCard>

			<ActionButton vpnLink={vpn.USOLink} text="Stream US Open on your device" />

			<p className="pt-5">
				Note if your Smart TV doesn’t directly support the ExpressVPN app you can get around this by connecting
				your VPN straight to your <a href={vpn.routerLink}>Wi-Fi router</a>. Simply access your router’s admin
				dashboard and connect to your <span>VPN network</span>.
			</p>

			<h2 className="mt-5">2024 US Open Schedule of Play (Singles)</h2>
			<br />
			<ActionTable tableData={USOSchedule} />

			{/* <p>Coco played 68 matches in 2023 and lost 16 matches, won 52 matches and 4 titles</p> */}

			<h2 className="mt-5">Past Champions: &emsp; </h2>

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
							<ActionTable tableData={USOChampionsATP} />
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
							<ActionTable tableData={USOChampionsWTA} />
						</div>
					</div>
				</div>
			</div>
			<div className="white-space" style={{ height: "80px", color: "white" }}></div>
		</>
	);
}
