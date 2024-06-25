import ActionButton from "../components/ActionButton";
import QuickGuide from "../components/QuickGuide";
import ActionTable from "../components/ActionTable";
import ActionCard from "../components/ActionCard";
import { streamingDataFO } from "../../tableData";
import { wimbledonSchedule } from "../../scheduleData";
import { vpn } from "../../vpnLinks";

export function USOpenPost() {
	return (
		<>
			<br />
			<p>
				The final grand slam of the year, the <span>US Open</span>, will take place in electric New York City!
				Check back for updates on match schedules, and the best options to watch the tournament later next
				month.
			</p>
		</>
	);
}
