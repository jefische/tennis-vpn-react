import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
			<div className="container-fluid d-flex mt-5 ">
				<div className="columnA roundGroup">
					<h3>1st Round</h3>
					<div className="drawGroup">
						<div className="card matchbox">
							<div className="d-flex team-info team-one">
								<div className="flex-fill name">A. Rublev (6)</div>
								<div className="check-icon"></div>
								<div className="d-flex match-score">
									<div className="set set1">
										<span className="score">4</span>
										<span className="tiebreak"></span>
									</div>
									<div className="set set2">
										<span className="score">7</span>
										<span className="tiebreak"></span>
									</div>
									<div className="set set3">
										<span className="score">2</span>
										<span className="tiebreak"></span>
									</div>
									<div className="set set4">
										<span className="score">6</span>
										<span className="tiebreak">5</span>
									</div>
									<div className="set set5"></div>
								</div>
							</div>
							<div className="d-flex team-info team-two">
								<div className="flex-fill name">F. Comesana</div>
								<div className="check-icon">
									<FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#1e860a" }} />
								</div>
								<div className="d-flex match-score">
									<div className="set set1">
										<span className="score">6</span>
										<span className="tiebreak"></span>
									</div>
									<div className="set set2">
										<span className="score">5</span>
										<span className="tiebreak"></span>
									</div>
									<div className="set set3">
										<span className="score">6</span>
										<span className="tiebreak"></span>
									</div>
									<div className="set set4">
										<span className="score">7</span>
										<span className="tiebreak">7</span>
									</div>
									<div className="set set5"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="drawGroup">
						<div className="card matchbox">
							<div className="d-flex team-info team-one">
								<div className="flex-fill name">F. Coria</div>
								<div className="check-icon"></div>
								<div className="d-flex match-score">
									<div className="set set1">
										<span className="score">3</span>
									</div>
									<div className="set set2">
										<span className="score">3</span>
									</div>
									<div className="set set3">
										<span className="score">5</span>
									</div>
									<div className="set set4"></div>
									<div className="set set5"></div>
								</div>
							</div>
							<div className="d-flex team-info team-two">
								<div className="flex-fill name">A. Walton</div>
								<div className="check-icon">
									<FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#1e860a" }} />
								</div>
								<div className="d-flex match-score">
									<div className="set set1">
										<span className="score">6</span>
									</div>
									<div className="set set2">
										<span className="score">6</span>
									</div>
									<div className="set set3">
										<span className="score">7</span>
									</div>
									<div className="set set4"></div>
									<div className="set set5"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="drawGroup">
						<div className="card matchbox">
							<div className="d-flex team-info team-one">
								<div className="flex-fill name">L. Darderi</div>
								<div className="check-icon">
									<FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#1e860a" }} />
								</div>
								<div className="d-flex match-score">
									<div className="set set1">
										<span className="score">7</span>
									</div>
									<div className="set set2">
										<span className="score">4</span>
									</div>
									<div className="set set3">
										<span className="score">2</span>
									</div>
									<div className="set set4">
										<span className="score">7</span>
									</div>
									<div className="set set5">
										<span className="score">6</span>
									</div>
								</div>
							</div>
							<div className="d-flex team-info team-two">
								<div className="flex-fill name">J. Choinski</div>
								<div className="check-icon"></div>
								<div className="d-flex match-score">
									<div className="set set1">
										<span className="score">5</span>
									</div>
									<div className="set set2">
										<span className="score">6</span>
									</div>
									<div className="set set3">
										<span className="score">6</span>
									</div>
									<div className="set set4">
										<span className="score">5</span>
									</div>
									<div className="set set5">
										<span className="score">2</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="drawGroup">
						<div className="card matchbox">
							<div className="d-flex team-info team-one">
								<div className="flex-fill name">C. Lestienne</div>
								<div className="check-icon"></div>
								<div className="d-flex match-score">
									<div className="set set1">
										<span className="score">6</span>
									</div>
									<div className="set set2">
										<span className="score">6</span>
										<span className="tiebreak">4</span>
									</div>
									<div className="set set3">
										<span className="score">2</span>
									</div>
									<div className="set set4">
										<span className="score">2</span>
									</div>
									<div className="set set5">
										<span className="score"></span>
									</div>
								</div>
							</div>
							<div className="d-flex team-info team-two">
								<div className="flex-fill name">L. Musetti</div>
								<div className="check-icon">
									<FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#1e860a" }} />
								</div>
								<div className="d-flex match-score">
									<div className="set set1">
										<span className="score">4</span>
									</div>
									<div className="set set2">
										<span className="score">7</span>
										<span className="tiebreak">7</span>
									</div>
									<div className="set set3">
										<span className="score">6</span>
									</div>
									<div className="set set4">
										<span className="score">6</span>
									</div>
									<div className="set set5">
										<span className="score"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="columnB roundGroup">
					<h3>2nd Round</h3>
					<div className="drawGroup">
						<div className="card matchbox">
							<div className="d-flex team-info team-one">
								<div className="flex-fill name">F. Comesana</div>
								<div className="check-icon">
									<FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#1e860a" }} />
								</div>
								<div className="d-flex match-score">
									<div className="set set1">
										<span className="score">7</span>
									</div>
									<div className="set set2">
										<span className="score">1</span>
										<span className="tiebreak"></span>
									</div>
									<div className="set set3">
										<span className="score">6</span>
										<span className="tiebreak">12</span>
									</div>
									<div className="set set4">
										<span className="score">6</span>
									</div>
									<div className="set set5">
										<span className="score">7</span>
										<span className="tiebreak">10</span>
									</div>
								</div>
							</div>
							<div className="d-flex team-info team-two">
								<div className="flex-fill name">A. Walton</div>
								<div className="check-icon"></div>
								<div className="d-flex match-score">
									<div className="set set1">
										<span className="score">5</span>
									</div>
									<div className="set set2">
										<span className="score">6</span>
										<span className="tiebreak"></span>
									</div>
									<div className="set set3">
										<span className="score">7</span>
										<span className="tiebreak">14</span>
									</div>
									<div className="set set4">
										<span className="score">1</span>
									</div>
									<div className="set set5">
										<span className="score">6</span>
										<span className="tiebreak">8</span>
									</div>
								</div>
							</div>
						</div>
						<div className="connector-round">
							<div className="left-side"></div>
							<div className="right-side"></div>
						</div>
					</div>
					<div className="drawGroup">
						<div className="card matchbox">
							<div className="d-flex team-info team-one">
								<div className="flex-fill name">L. Darderi</div>
								<div className="check-icon"></div>
								<div className="d-flex match-score">
									<div className="set set1">
										<span className="score">4</span>
									</div>
									<div className="set set2">
										<span className="score">6</span>
										<span className="tiebreak"></span>
									</div>
									<div className="set set3">
										<span className="score">7</span>
										<span className="tiebreak">7</span>
									</div>
									<div className="set set4">
										<span className="score">4</span>
									</div>
									<div className="set set5">
										<span className="score">4</span>
										<span className="tiebreak"></span>
									</div>
								</div>
							</div>
							<div className="d-flex team-info team-two">
								<div className="flex-fill name">L. Musetti</div>
								<div className="check-icon">
									<FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#1e860a" }} />
								</div>
								<div className="d-flex match-score">
									<div className="set set1">
										<span className="score">6</span>
									</div>
									<div className="set set2">
										<span className="score">4</span>
										<span className="tiebreak"></span>
									</div>
									<div className="set set3">
										<span className="score">6</span>
										<span className="tiebreak">5</span>
									</div>
									<div className="set set4">
										<span className="score">6</span>
									</div>
									<div className="set set5">
										<span className="score">6</span>
										<span className="tiebreak"></span>
									</div>
								</div>
							</div>
						</div>
						<div className="connector-round">
							<div className="left-side"></div>
							<div className="right-side"></div>
						</div>
					</div>
				</div>
				<div className="columnC roundGroup">
					<h3>3rd Round</h3>
					<div className="drawGroup">
						<div className="card matchbox">
							<div className="d-flex team-info team-one">
								<div className="flex-fill name">F. Comesana</div>
								<div className="check-icon">
									<FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#1e860a" }} />
								</div>
								<div className="d-flex match-score">
									<div className="set set1">
										<span className="score">2</span>
									</div>
									<div className="set set2">
										<span className="score">7</span>
										<span className="tiebreak">7</span>
									</div>
									<div className="set set3">
										<span className="score">6</span>
										<span className="tiebreak">3</span>
									</div>
									<div className="set set4">
										<span className="score">3</span>
									</div>
									<div className="set set5">
										<span className="score"></span>
										<span className="tiebreak"></span>
									</div>
								</div>
							</div>
							<div className="d-flex team-info team-two">L. Musetti</div>
						</div>
					</div>
				</div>
				<div className="columnD roundGroup last">
					<h3>4th Round</h3>
					<div className="drawGroup">
						<div className="card matchbox">
							<div className="d-flex team-info team-one">L. Musetti</div>
							<div className="d-flex team-info team-two">G. Mpetshi</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
