import ActionCard from "./ActionCard";
import ActionTable from "./ActionTable";
import { HomepagePost1, HomepagePost2 } from "./HomepagePosts";

export default function Posts({
	title,
	isH1 = false,
	children,
	card = false,
	table = false,
}) {
	const generalTennisLink =
		"https://go.expressvpn.com/c/4998943/1481132/16063";

	return (
		<>
			<div id="post1" className="bposts">
				{isH1 ? (
					<h1 className="mt-4">{title}</h1>
				) : (
					<h2 className="mt-4">{title}</h2>
				)}
				<br />
				{children}
				{card && <ActionCard vpnLink={generalTennisLink} />}
				{table && <ActionTable vpnLink={generalTennisLink} />}
			</div>
		</>
	);
}
