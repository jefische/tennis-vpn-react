import OddsGrid from "./components/OddsGrid";
import { atpAustralianOdds, wtaAustralianOdds } from "../tableData";
import { useLocation } from "react-router-dom";

export default function SideContent() {
	const location = useLocation();
	return (
		<div className="col-3 p-3 pt-0 d-none d-lg-block">
			{location.pathname === "/" ? (
				<div id="TOC" className="sticky-top" style={{ top: "10%" }}>
					<h4>Table of Contents</h4>
					<ol>
						<li>
							<a href="#toc1">How to Watch Tennis Online</a>
						</li>
						<li>
							<a href="#toc2">Best Streaming Options</a>
						</li>
						<li>
							<a href="#toc3">Why do you need a VPN?</a>
						</li>
						<li>
							<a href="#toc4">Upcoming ATP events</a>
						</li>
						<li>
							<a href="#toc5">Upcoming WTA events</a>
						</li>
					</ol>
				</div>
			) : (
				<div className="odds-container sticky-top">
					<OddsGrid tableData={atpAustralianOdds} title={atpAustralianOdds.title} />
					<OddsGrid tableData={wtaAustralianOdds} title={wtaAustralianOdds.title} />
				</div>
			)}
		</div>
	);
}
