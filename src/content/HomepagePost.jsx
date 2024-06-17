import ActionButton from "../components/ActionButton";
import ActionCard from "../components/ActionCard";
import ActionTable from "../components/ActionTable";
import { streamingData, atpTournamentData, wtaTournamentData } from "../../tableData";

const generalTennisLink = "https://go.expressvpn.com/c/4998943/1481132/16063";
const streamingServicesLink = "https://go.expressvpn.com/c/4998943/1462857/16063";

export function HomepagePost() {
	return (
		<>
			<p>
				The start of the 2024 tennis season will be here in a few weeks! Tournaments will begin in Australia and
				first up will be the second edition of the <span>United Cup</span> played in{" "}
				<span>Perth and Sydney</span>, followed by <span>Brisbane</span> which will be Rafa Nadal's first
				tournament since the Australian Open. Depending on which country you live in, you may not have access to
				a live broadcast of a tournament due to <span>geo-restrictions.</span> Another roadblock fans run into
				are <span>blackout policies</span> which prevent certain locations from streaming an event due to TV
				station broadcasting rights. Fortunately you can bypass these restrictions using a VPN and{" "}
				<span>masking your actual IP address.</span>
			</p>
			<p>
				For example, if you are in Australia then Channel 9Now will be broadcasting the Australian Open for
				free. However, if you reside outside Australia you may not have access to a live broadcast and will need
				to connect to a streaming service to watch the tournament.
			</p>

			<ActionCard vpnLink={generalTennisLink} />
			<ActionButton vpnLink={generalTennisLink} text="Stream tennis with ExpressVPN" id="red-button-one" />

			<h2 className="mt-5">Best Streaming Options to Watch Tennis</h2>
			<p>
				If you're looking to cut the cord there are multiple options to watch tennis with just an internet
				connection. Some of the best streaming services include{" "}
				<span>Sling TV, ESPN+, TSN, Eurosport and Tennis Channel Plus.</span> To{" "}
				<span>unblock any geo-restrictions</span> you might face when accessing these services, you'll need a
				reliable VPN.
			</p>
			<p>Below is a list of some streaming services by country and the cost per month.</p>

			<ActionTable tableData={streamingData} />
			<ActionButton vpnLink={streamingServicesLink} text="Unblock streaming with ExpressVPN" />

			<h2 className="mt-5">Why do you need a VPN?</h2>
			<p>
				Many tennis matches cannot be streamed from various locations because of{" "}
				<span>exclusive broadcast rights</span> that cable TV networks acquire. This leads to streaming{" "}
				<span>blackouts</span> or <span>geo-restrictions</span> that prevent many tennis fans from watching an
				event.
			</p>

			<p>
				The good news is that you can easily bypass these restrictions using a reliable VPN. We highly recommend{" "}
				<a href={generalTennisLink}>ExpressVPN</a> for <span>reliability, speed, and security.</span>
			</p>

			<p>
				ExpressVPN has <span>over 3,000 servers in 94 countires</span> meaning you'll have no problem finding a
				server in your region of choice.
			</p>

			<p>
				Additionally, ExpressVPN uses 10Gbps servers for extremely fast service and allows users to connect on
				up to 8 devices.
			</p>

			<p>
				<a href={generalTennisLink}>ExpressVPN</a> is currently offering a 12 month +3 months free promotion for{" "}
				<span>$6.67/month.</span> All subscriptions also come with a <span>30-day money back guarantee.</span>{" "}
				This is an excellent purchase for the quality of service you receive.
			</p>

			<h2 className="mt-5">Upcoming ATP events</h2>
			<ActionTable tableData={atpTournamentData} />

			<h2 className="mt-5">Upcoming WTA events</h2>
			<ActionTable tableData={wtaTournamentData} />

			<h2 className="mt-5">Conclusion</h2>
			<p>
				The landscape of broadcasting rights and licensing is always changing. Most recently in the UK, Amazon
				Prime will be dropping international tennis tournament coverage after 2023. Sky Sports may take over
				some of the coverage as they have covered the ATP tour before. To{" "}
				<span>avoid paying for expensive cable plans</span>, having access to a <span>quality VPN</span> is a
				must have to bypass geo-restrictions and help you watch more tennis!
			</p>

			<p>Let us know in the comment section below if you found this guide helpful or have any questions.</p>
		</>
	);
}
