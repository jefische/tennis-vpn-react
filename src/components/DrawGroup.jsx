import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

export default function DrawGroup({ scores }) {
	return (
		<>
			<div className="drawGroup">
				<div className="card matchbox">
					{scores.map((x) => {
						return (
							<Fragment key={x.id}>
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
										{x.score1.map((y) => {
											return (
												<Fragment>
													<div className="set set1">
														{y.length ? (
															<>
																<span className="score">{y[0]}</span>
																<span className="tiebreak">{y[1]}</span>
															</>
														) : (
															<span className="score">{y}</span>
														)}
													</div>
												</Fragment>
											);
										})}
									</div>
								</div>

								<div className="d-flex team-info team-one">
									<div className="flex-fill name">{x.team2}</div>
									<div className="check-icon">
										{x.winner == "team2" ? (
											<FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#1e860a" }} />
										) : (
											""
										)}
									</div>
									<div className="d-flex match-score">
										{x.score2.map((y) => {
											return (
												<Fragment>
													<div className="set set1">
														{y.length ? (
															<>
																<span className="score">{y[0]}</span>
																<span className="tiebreak">{y[1]}</span>
															</>
														) : (
															<span className="score">{y}</span>
														)}
													</div>
												</Fragment>
											);
										})}
									</div>
								</div>
							</Fragment>
						);
					})}
				</div>
			</div>
		</>
	);
}
