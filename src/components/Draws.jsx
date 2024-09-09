import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import DrawGroup from "./DrawGroup";
import { atpWimbledonScores, atpWimbledonScores2023 } from "../../data/scoresData";

export default function Draws({ title, updated, children }) {
	const [selection, setSelection] = useState({});

	return (
		<>
			<div className="container-draw d-flex flex-wrap justify-content-center">
				<h1 className="ps-3 mt-5 text-center" style={{ flexBasis: "100%" }}>
					{title}
				</h1>

				<form
					className="d-flex mt-3"
					method="get"
					onSubmit={(e) => {
						e.preventDefault();

						const formData = new FormData(e.target);
						console.log(formData.get("slams"));
					}}
				>
					<label htmlFor="slams">Tournament</label>
					<select id="slams" name="slams" className="mx-2">
						<option value="AO">Australian Open</option>
						<option value="FO">French Open</option>
						<option value="W">Wimbledon</option>
						<option value="USO">US Open</option>
					</select>
					<label htmlFor="gender">Men/Women</label>
					<select id="gender" name="gender" className="mx-2">
						<option value="men">Men</option>
						<option value="women">Women</option>
					</select>
					<label htmlFor="year">Year</label>
					<select name="year" className="mx-2">
						<option value="2024">2024</option>
						<option value="2023">2023</option>
					</select>
					<label htmlFor="round">Round</label>
					<select name="round" className="mx-2">
						<option value="1">1st Round</option>
						<option value="2">2nd Round</option>
						<option value="3">3rd Round</option>
						<option value="4">4th Round</option>
						<option value="5">Quarterfinals</option>
						<option value="6">Semifinals</option>
						<option value="7">Finals</option>
					</select>
					<button type="submit">Submit</button>
				</form>
			</div>

			<div className="container-fluid d-flex mt-5 justify-content-center">
				<div className="columnA roundGroup">
					<h3 className="text-center">1st Round</h3>
					<DrawGroup scores={atpWimbledonScores2023} round={1} connector={false} />
				</div>
				<div className="columnB roundGroup">
					<h3 className="text-center">2nd Round</h3>
					<DrawGroup scores={atpWimbledonScores2023} round={2} connector={true} />
				</div>
				<div className="columnC roundGroup last">
					<h3 className="text-center">3rd Round</h3>
					<DrawGroup scores={atpWimbledonScores2023} round={3} connector={true} />
				</div>
			</div>
		</>
	);
}
