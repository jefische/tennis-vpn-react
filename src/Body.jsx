import Hero from "./Hero";
import Posts from "./Posts";
import SideContent from "./SideContent";
import { HomepagePost1, HomepagePost2, HomepagePost3 } from "./HomepagePosts";
import {
	streamingData,
	atpTournamentData,
	wtaTournamentData,
} from "../tableData";

export default function Body() {
	const generalTennisLink =
		"https://go.expressvpn.com/c/4998943/1481132/16063";
	const streamingServicesLink =
		"https://go.expressvpn.com/c/4998943/1462857/16063";
	return (
		<section>
			<div className="container">
				<div className="d-flex mt-4">
					<div className="col-lg-9 p-3 pt-0">
						<Hero />
						<Posts
							id="post1"
							title="How to Watch Tennis Online in 2024"
							isH1={true}
							card={true}
							button={true}
							buttonText="Stream tennis with ExpressVPN"
							buttonID="red-button-one"
							vpnLink={generalTennisLink}
						>
							<HomepagePost1 />
						</Posts>
						<Posts
							id="post2"
							title="Best Streaming Options to Watch Tennis"
							table={true}
							tableData={streamingData}
							button={true}
							buttonText="Unblock streaming with ExpressVPN"
							vpnLink={streamingServicesLink}
						>
							<HomepagePost2 />
						</Posts>
						<Posts
							id="post3"
							title="Why do you need a VPN?"
							vpnLink={generalTennisLink}
						>
							<HomepagePost3 vpnLink={generalTennisLink} />
						</Posts>
						<Posts
							id="post4"
							title="Upcoming ATP events"
							table={true}
							tableData={atpTournamentData}
						></Posts>
						<Posts
							id="post5"
							title="Upcoming WTA events"
							table={true}
							tableData={wtaTournamentData}
						></Posts>
					</div>
					<SideContent />
				</div>
			</div>
		</section>
	);
}
