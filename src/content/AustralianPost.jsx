import ActionButton from "../components/ActionButton";
import ActionCard from "../components/ActionCard";
import ActionTable from "../components/ActionTable";
import { streamingData, atpTournamentData, wtaTournamentData } from "../../tableData";

const generalTennisLink = "https://go.expressvpn.com/c/4998943/1481132/16063";
const streamingServicesLink = "https://go.expressvpn.com/c/4998943/1462857/16063";

export function AustralianPost() {
	return (
		<>
			<h6>Updated December 2023</h6>

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

			<ActionCard vpnLink={generalTennisLink} />
			<ActionButton vpnLink={generalTennisLink} text="Stream tennis with ExpressVPN" id="red-button-one" />
		</>
	);
}
