import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

export default function DrawGroup({ scores, round, connector }) {
	let roundScores;
	{
		// If no scores are available for a particular tournament year, return an empty array
		scores == null ? (roundScores = [{}]) : (roundScores = scores.filter((x) => x.round == round));
	}
	return (
		<>
			{scores == null ? (
				<div></div>
			) : (
				roundScores.map((x) => {
					return (
						<Fragment key={x.id}>
							<div className="drawGroup">
								<div className="card matchbox">
									<div className="d-flex team-info team-one">
										<div className="flex-fill name">{x.team1}</div>
										<div className="check-icon">
											{x.winner == "team1" ? (
												<FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#1e860a" }} />
											) : (
												""
											)}
										</div>
										<div className="d-flex match-score">
											{x.score1.map((y, index) => {
												return (
													<>
														{y == "Walkover" ? (
															<div className="set-walkover">{y}</div>
														) : (
															<div className="set" key={index}>
																{y.length ? (
																	<>
																		<span className="score">{y[0]}</span>
																		<span className="tiebreak">{y[1]}</span>
																	</>
																) : (
																	<span className="score">{y}</span>
																)}
															</div>
														)}
													</>
												);
											})}
										</div>
										{/* match-score */}
									</div>
									{/* team-one */}

									<div className="d-flex team-info team-two">
										<div className="flex-fill name">{x.team2}</div>
										<div className="check-icon">
											{x.winner == "team2" ? (
												<FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#1e860a" }} />
											) : (
												""
											)}
										</div>
										<div className="d-flex match-score">
											{x.score2.map((y, index) => {
												return (
													<>
														{y == "Walkover" ? (
															<div className="set-walkover">{y}</div>
														) : (
															<div className="set" key={index}>
																{y.length ? (
																	<>
																		<span className="score">{y[0]}</span>
																		<span className="tiebreak">{y[1]}</span>
																	</>
																) : (
																	<span className="score">{y}</span>
																)}
															</div>
														)}
													</>
												);
											})}
										</div>
										{/* match-score */}
									</div>
									{/* team-two */}
								</div>
								{/* matchbox */}
								{connector && (
									<div className="connector-round">
										<div className="left-side"></div>
										<div className="right-side"></div>
									</div>
								)}
							</div>
							{/* drawGroup */}
						</Fragment>
					);
				})
			)}
		</>
	);
}
