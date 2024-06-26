import ActionButton from "../components/ActionButton";
import QuickGuide from "../components/QuickGuide";
import ActionTable from "../components/ActionTable";
import ActionCard from "../components/ActionCard";
import { streamingDataAO } from "../../tableData";
import { australianSchedule } from "../../scheduleData";
import { vpn } from "../../vpnLinks";

export function AustralianPost() {
	return (
		<>
			<br />
			<p>
				With the start of the 2024 season just around the corner, the <span>Australian Open</span> will be under
				way before we know it, kicking off the first of the four grand slam events! The tournament will{" "}
				<span>start on Sunday, January 14th</span> and run until Sunday January 28th.
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
				vpnLink={vpn.AOLink}
				bullet1="then download and install on your device."
				bullet2="yourself to an Australian server."
				bullet3="to 9Now or create an account if needed (you may need an Australian postal code, e.g. 2000 or 3010)"
			/>
			<ActionButton vpnLink={vpn.AOLink} text="Stream Australian Open with ExpressVPN" id="red-button-one" />

			<h2 id="best-streaming-options" className="mt-5">
				Best streaming services to watch the Australian Open
			</h2>
			<br />
			<p>
				There are a few services you can use to watch the Australian Open depending on your location. The best
				option is <span>9Now</span> as it is a <span>completely free streaming service</span>. However, for
				users with a different preference here are other great affordable options:
			</p>
			<ActionTable tableData={streamingDataAO} />
			<ActionButton vpnLink={vpn.streamingServicesLink} text="Unblock streaming with ExpressVPN" />

			<h2 className="mt-5">Watching the Australian Open on your device</h2>
			<br />
			<p>
				You can catch all of the Australian Open online with any device including{" "}
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

			<p>Follow these easy steps to stream the Australian Open on your device:</p>

			<ActionCard>
				<li className="pb-1">
					Download the <a href={vpn.smartTVLink}>ExpressVPN</a> app directly to your device and login
				</li>
				<li className="pb-1">Connect to a server in Australia</li>
				<li className="pb-1">Login to 9Now or another streaming service in Australia of your choice.</li>
				<li className="pb-1">Enjoy live streaming the matches!</li>
			</ActionCard>

			<ActionButton vpnLink={vpn.AOLink} text="Stream Australian Open on your device" />

			<p className="pt-5">
				Note if your Smart TV doesn’t directly support the ExpressVPN app you can get around this by connecting
				your VPN straight to your <a href={vpn.routerLink}>Wi-Fi router</a>. Simply access your router’s admin
				dashboard and connect to your <span>VPN network</span>.
			</p>

			<h2 className="mt-5">2024 Australian Open Schedule of Play (Singles)</h2>
			<br />
			<ActionTable tableData={australianSchedule} />
		</>
	);
}
