import ActionButton from "../components/ActionButton";
import QuickGuide from "../components/QuickGuide";
import ActionTable from "../components/ActionTable";
import ActionCard from "../components/ActionCard";
import { streamingDataWimbledon } from "../../tableData";
import { wimbledonSchedule } from "../../scheduleData";
import { vpn } from "../../vpnLinks";

export function WimbledonPost() {
	return (
		<>
			<br />
			<p>
				Get ready for the oldest and most prestigious tennis tournament in the world, <span>Wimbledon.</span>{" "}
				While last years champions Carlos Alcaraz and Marketa Vondrousova are among the favorites to win again
				this year, the fields are stacked with great competition in both the men's and women's draws.
			</p>
			<p>
				The tournament will <span>start on Monday, July 1st</span> and run until Sunday July 14th and is{" "}
				<span>completely free to watch on BBC iPlayer in the UK and 9Now in Australia.</span>
			</p>

			<p>
				Tennis broadcasting rights are available only for select channels and streaming services around the
				world. Fortunately, even if you are located in a country without access to these channels or services,
				all you need to do is <span>mask your ip address</span> with a reputable VPN. A VPN will allow you to
				bypass any <span>geo-restrictions</span> or <span>blackout policies</span> which prevent certain
				locations from streaming events due to broadcasting rights.
			</p>

			<p>
				A high quality VPN recommended by many users around the world is <span>ExpressVPN</span> due to its
				reliability, speed, and service with more than <span>3,000 servers</span> located in{" "}
				<span>94 countries</span>.
			</p>

			<QuickGuide
				vpnLink={vpn.WimbledonLink}
				bullet1="then download and install on your device."
				bullet2="yourself to a location based on your streaming service of choice. For example relocate to the UK if you plan to use BBC iPlayer"
				bullet3="to your streaming platform of choice."
			/>
			<ActionButton vpnLink={vpn.WimbledonLink} text="Stream tennis with ExpressVPN" id="red-button-one" />

			<h2 id="best-streaming-options" className="mt-5">
				Best streaming services to watch Wimbledon
			</h2>
			<br />
			<p>
				There are a few services you can use to watch Wimbledon depending on your location. The best options are{" "}
				<span>BBC iPlayer</span> and <span>9Now</span> as both are{" "}
				<span>completely free streaming services</span>. For users with a different preference here are other
				great options:
			</p>
			<ActionTable tableData={streamingDataWimbledon} />
			<ActionButton vpnLink={vpn.streamingServicesLink} text="Unblock streaming with ExpressVPN" />

			<h2 className="mt-5">Watching Wimbledon on your device</h2>
			<br />
			<p>
				You can catch all of Wimbledon online with any device including{" "}
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

			<p>Follow these easy steps to stream Wimbledon on your device:</p>

			<ActionCard>
				<li className="pb-1">
					Download the <a href={vpn.smartTVLink}>ExpressVPN</a> app directly to your device and login
				</li>
				<li className="pb-1">Connect to a UK server</li>
				<li className="pb-1">Login to BBC iPlayer or another streaming service of your choice.</li>
				<li className="pb-1">Enjoy live streaming the matches!</li>
			</ActionCard>

			<ActionButton vpnLink={vpn.WimbledonLink} text="Stream Wimbledon on your device" />

			<p className="pt-5">
				Note if your Smart TV doesn’t directly support the ExpressVPN app you can get around this by connecting
				your VPN straight to your <a href={vpn.routerLink}>Wi-Fi router</a>. Simply access your router’s admin
				dashboard and connect to your <span>VPN network</span>.
			</p>

			<h2 className="mt-5">2024 Wimbledon Schedule of Play</h2>
			<br />
			<ActionTable tableData={wimbledonSchedule} />
		</>
	);
}
