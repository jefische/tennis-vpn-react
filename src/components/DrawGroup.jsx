import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

export default function DrawGroup({ scores, round, connector }) {
	let roundScores;
	{
		// If no scores are available for a particular tournament and year, return an empty array
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
										<div className="d-flex flex-fill name align-items-center">
											<img
												className="me-3"
												src={`src/assets/flags/${x.team1_country}_sm.gif`}
												alt={`${x.team1_country} flag`}
											/>
											{x.team1}
										</div>
										{x.winner == "team1" ? (
											<div className="check-icon">
												<FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#1e860a" }} />
											</div>
										) : x.status == "retired" ? (
											<div className="not-completed">Retired</div>
										) : x.status == "walkover" ? (
											<div className="not-completed">Walkover</div>
										) : (
											""
										)}
										<div className="d-flex match-score">
											{x.score1.map((y, index) => {
												return (
													<Fragment key={index}>
														{y == "Walkover" ? (
															<div className="walkover">{y}</div>
														) : (
															<div className="set">
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
													</Fragment>
												);
											})}
										</div>
										{/* match-score */}
									</div>
									{/* team-one */}

									<div className="d-flex team-info team-two">
										<div className="d-flex flex-fill name align-items-center">
											<img
												className="me-3"
												src={`src/assets/flags/${x.team2_country}_sm.gif`}
												alt={`${x.team2_country} flag`}
											/>
											{x.team2}
										</div>
										{x.winner == "team2" ? (
											<div className="check-icon">
												<FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#1e860a" }} />
											</div>
										) : x.status == "retired" ? (
											<div className="not-completed">Retired</div>
										) : x.status == "walkover" ? (
											<div className="not-completed">Walkover</div>
										) : (
											""
										)}
										<div className="d-flex match-score">
											{x.score2.map((y, index) => {
												return (
													<Fragment key={index}>
														{y == "Walkover" ? (
															<div className="walkover">{y}</div>
														) : (
															<div className="set">
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
													</Fragment>
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
