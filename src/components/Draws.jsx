import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
// import { faForward as farFaForward } from "@fortawesome/free-regular-svg-icons";
import DrawGroup from "./DrawGroup";
import { slamScoresArray } from "../../data/scoresData";
import Footer from "./Footer";

export default function Draws({ title, updated, children }) {
	const [roundCounter, setCounter] = useState(null);
	const [columnARound, setRoundA] = useState(1);
	const [columnBRound, setRoundB] = useState(2);
	const [columnCRound, setRoundC] = useState(3);
	const [showHidden, setVisibility] = useState("invisible");
	const [displayDataMsg, setDataMsg] = useState(false);
	const [slamData, setSlamData] = useState([]);
	const [slamYears, setSlamYears] = useState(["Choose..."]);
	const ref = useRef(null);
	const [footer, setFooter] = useState(true);

	function handleTournamentChange(e) {
		const years = slamScoresArray.filter((x) => {
			if (x.id.match(e.target.value)) {
				return x;
			}
		});
		if (years.length > 0) {
			setSlamYears(
				years.map((x) => {
					return x.id.match(/\d+/);
				}),
			);
		} else {
			setSlamYears(["No Data"]);
		}
	}

	function handleRoundClick(e) {
		window.scrollTo({ top: 0, behavior: "smooth" });
		setCounter(Number(e.currentTarget.name));
		setRoundA(Number(e.currentTarget.name) + 1);
		setRoundB(Number(e.currentTarget.name) + 2);
		setRoundC(Number(e.currentTarget.name) + 3);
	}

	useEffect(() => {
		const nextBtns = document.querySelector(".prev-next-button.next");
		const prevBtns = document.querySelector(".prev-next-button.previous");
		const titleA = document.querySelector(".pad-1");
		const titleB = document.querySelector(".pad-2");
		const titleC = document.querySelector(".pad-3");
		const colB = document.querySelector(".columnB");
		const colC = document.querySelector(".columnC");

		switch (roundCounter) {
			case 0:
				titleA.innerHTML = "1st Round";
				titleB.innerHTML = "2nd Round";
				titleC.innerHTML = "3rd Round";
				setFooter(false);
				break;
			case 1:
				titleA.innerHTML = "2nd Round";
				titleB.innerHTML = "3rd Round";
				titleC.innerHTML = "4th Round";
				setFooter(false);
				break;
			case 2:
				titleA.innerHTML = "3rd Round";
				titleB.innerHTML = "4th Round";
				titleC.innerHTML = "Quarterfinals";
				setFooter(false);
				break;
			case 3:
				titleA.innerHTML = "4th Round";
				titleB.innerHTML = "Quarterfinals";
				titleC.innerHTML = "Semifinals";
				setFooter(false);
				break;
			case 4:
				titleA.innerHTML = "Quarterfinals";
				titleB.innerHTML = "Semifinals";
				titleC.innerHTML = "Finals";
				setFooter(false);
				break;
			case 5:
				titleA.innerHTML = "Semifinals";
				titleB.innerHTML = "Finals";
				titleC.innerHTML = "";
				setFooter(true);
				break;
			case 6:
				titleA.innerHTML = "Finals";
				titleB.innerHTML = "";
				titleC.innerHTML = "";
				setFooter(true);
				break;
		}

		if (columnARound == 7) {
			colB.classList.add("invisible");
			colC.classList.add("invisible");
		} else if (columnBRound == 7) {
			colB.classList.remove("invisible");
			colC.classList.add("invisible");
		} else {
			colB.classList.remove("invisible");
			colC.classList.remove("invisible");
		}
		function handleNextScroll(e) {
			setCounter(Math.min(roundCounter + 1, 6));
			setRoundA(Math.min(columnARound + 1, 7));
			setRoundB(Math.min(columnBRound + 1, 8));
			setRoundC(Math.min(columnCRound + 1, 9));
		}
		function handlePrevScroll(e) {
			setCounter(Math.max(roundCounter - 1, 0));
			setRoundA(Math.max(columnARound - 1, 1));
			setRoundB(Math.max(columnBRound - 1, 2));
			setRoundC(Math.max(columnCRound - 1, 3));
		}

		if (ref.current) {
			nextBtns.addEventListener("click", handleNextScroll);
			prevBtns.addEventListener("click", handlePrevScroll);
			return () => {
				nextBtns.removeEventListener("click", handleNextScroll);
				prevBtns.removeEventListener("click", handlePrevScroll);
			};
		}
	});

	return (
		<>
			<div className="draw-selection-container">
				<h3 className="text-center">{title}</h3>

				<form
					method="get"
					onSubmit={(e) => {
						e.preventDefault();
						const formData = new FormData(e.target);
						const slam = formData.get("slams");
						const year = formData.get("year");
						const result = slamScoresArray.filter((x) => {
							return x.id == slam + year;
						});
						if (result.length > 0) {
							setSlamData(result[0].scores);
							setVisibility("visible");
							setDataMsg(false);
							setFooter(false);
						} else {
							console.log(result.length);
							setSlamData(slamScoresArray[0].scores);
							setVisibility("invisible");
							setDataMsg(true);
							setCounter(null);
							setFooter(true);
						}
						window.scrollTo({ top: 0, behavior: "instant" });
					}}
				>
					<div>
						<label htmlFor="slams">Tournament</label>
						<select className="form-select" id="slams" name="slams" onChange={handleTournamentChange}>
							<option value="empty">Choose...</option>
							<option value="AOM">Australian Open (M)</option>
							<option value="AOW">Australian Open (W)</option>
							<option value="FOM">French Open (M)</option>
							<option value="FOW">French Open (W)</option>
							<option value="WM">Wimbledon (M)</option>
							<option value="WW">Wimbledon (W)</option>
							<option value="USOM">US Open (M)</option>
							<option value="USOW">US Open (W)</option>
						</select>
					</div>
					<div>
						<label htmlFor="year">Year</label>
						<select className="form-select" name="year" id="tournament_year">
							{slamYears.map((x) => {
								return (
									<option key={x} value={x}>
										{x}
									</option>
								);
							})}
						</select>
					</div>
					<button className="btn btn-success" type="submit">
						Submit
					</button>
				</form>
			</div>
			{/* draw-selection-container */}

			<div className={`round-headers-container ${showHidden}`}>
				<div className="buttonGroup">
					<button className="btn btn-outline-success" onClick={handleRoundClick} name="0">
						1st Round
					</button>
					<button className="btn btn-outline-success" onClick={handleRoundClick} name="1">
						2nd Round
					</button>
					<button className="btn btn-outline-success" onClick={handleRoundClick} name="2">
						3rd Round
					</button>
					<button className="btn btn-outline-success" onClick={handleRoundClick} name="3">
						4th Round
					</button>
					<button className="btn btn-outline-success" onClick={handleRoundClick} name="4">
						Quarterfinals
					</button>
					<button className="btn btn-outline-success" onClick={handleRoundClick} name="5">
						Semifinals
					</button>
					<button className="btn btn-outline-success" onClick={handleRoundClick} name="6">
						Finals
					</button>
				</div>
				<div className={`round-headers px-4 ${showHidden}`}>
					<h4 className="text-center pad-1">1st Round</h4>
					<h4 className="text-center pad-2">2nd Round</h4>
					<h4 className="text-center pad-3">3rd Round</h4>
				</div>
			</div>
			{/* round-headers */}

			<h4 className={`text-center ${!showHidden} ${displayDataMsg ? "d-block" : "d-none"}`}>Data not available</h4>

			<div className="carousel-container">
				<div className={`px-4 pt-5`} ref={ref}>
					<div className="columnA roundGroup">
						<DrawGroup scores={slamData} round={columnARound} connector={false} />
					</div>
					<div className="columnB roundGroup">
						<DrawGroup scores={slamData} round={columnBRound} connector={true} />
					</div>
					<div className="columnC roundGroup">
						<DrawGroup scores={slamData} round={columnCRound} connector={true} />
					</div>
				</div>
				<button className={`prev-next-button next ${showHidden}`}>
					<FontAwesomeIcon icon={faForward} size="xl" style={{ color: "#1e860a" }} />
				</button>
				<button className={`prev-next-button previous ${showHidden}`}>
					<FontAwesomeIcon icon={faBackward} size="xl" style={{ color: "#1e860a" }} />
				</button>
			</div>
			{/* carousel-container */}
			<Footer fixedBottom={footer} />
		</>
	);
}
