import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
// import { faForward as farFaForward } from "@fortawesome/free-regular-svg-icons";
import DrawGroup from "./DrawGroup";
import { atpWimbledonScores2023, wtaWimbledonScores2023 } from "../../data/scoresData";

export default function Draws({ title, updated, children }) {
	const [roundCounter, setCounter] = useState(0);
	const [columnARound, setRoundA] = useState(1);
	const [columnBRound, setRoundB] = useState(2);
	const [columnCRound, setRoundC] = useState(3);
	const [displayDraw, setDisplay] = useState("invisible");
	const [slamData, setSlamData] = useState([]);
	const ref = useRef(null);

	const titleA = document.querySelector("h3.pad-1");
	const titleB = document.querySelector("h3.pad-2");
	const titleC = document.querySelector("h3.pad-3");

	function handleRoundClick(e) {
		window.scrollTo({ top: 0, behavior: "smooth" });
		setCounter(Number(e.currentTarget.name));

		setRoundA(Number(e.currentTarget.name) + 1);
		setRoundB(Number(e.currentTarget.name) + 2);
		setRoundC(Number(e.currentTarget.name) + 3);

		switch (roundCounter) {
			case 0:
				titleA.innerHTML = "1st Round";
				titleB.innerHTML = "2nd Round";
				titleC.innerHTML = "3rd Round";
				break;
			case 1:
				titleA.innerHTML = "2nd Round";
				titleB.innerHTML = "3rd Round";
				titleC.innerHTML = "4th Round";
				break;
			case 2:
				titleA.innerHTML = "3rd Round";
				titleB.innerHTML = "4th Round";
				titleC.innerHTML = "Quarterfinals";
				break;
			case 3:
				titleA.innerHTML = "4th Round";
				titleB.innerHTML = "Quarterfinals";
				titleC.innerHTML = "Semifinals";
				break;
			case 4:
				titleA.innerHTML = "Quarterfinals";
				titleB.innerHTML = "Semifinals";
				titleC.innerHTML = "Finals";
				break;
			case 5:
				titleA.innerHTML = "Semifinals";
				titleB.innerHTML = "Finals";
				titleC.innerHTML = "";
				break;
			case 6:
				titleA.innerHTML = "Finals";
				titleB.innerHTML = "";
				titleC.innerHTML = "";
				break;
		}
	}

	useEffect(() => {
		const nextBtns = document.querySelector(".prev-next-button.next");
		const prevBtns = document.querySelector(".prev-next-button.previous");
		const titleA = document.querySelector("h3.pad-1");
		const titleB = document.querySelector("h3.pad-2");
		const titleC = document.querySelector("h3.pad-3");
		const colB = document.querySelector(".columnB");
		const colC = document.querySelector(".columnC");

		switch (roundCounter) {
			case 0:
				titleA.innerHTML = "1st Round";
				titleB.innerHTML = "2nd Round";
				titleC.innerHTML = "3rd Round";
				break;
			case 1:
				titleA.innerHTML = "2nd Round";
				titleB.innerHTML = "3rd Round";
				titleC.innerHTML = "4th Round";
				break;
			case 2:
				titleA.innerHTML = "3rd Round";
				titleB.innerHTML = "4th Round";
				titleC.innerHTML = "Quarterfinals";
				break;
			case 3:
				titleA.innerHTML = "4th Round";
				titleB.innerHTML = "Quarterfinals";
				titleC.innerHTML = "Semifinals";
				break;
			case 4:
				titleA.innerHTML = "Quarterfinals";
				titleB.innerHTML = "Semifinals";
				titleC.innerHTML = "Finals";
				break;
			case 5:
				titleA.innerHTML = "Semifinals";
				titleB.innerHTML = "Finals";
				titleC.innerHTML = "";
				break;
			case 6:
				titleA.innerHTML = "Finals";
				titleB.innerHTML = "";
				titleC.innerHTML = "";
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
			<div className="container-draw d-flex flex-column pt-4 pb-4 sticky-top z-1 bg-body" style={{ top: "6%" }}>
				<h1 className="ps-3 text-center" style={{ flexBasis: "100%" }}>
					{title}
				</h1>

				<form
					className="d-flex mt-3 justify-content-center"
					method="get"
					onSubmit={(e) => {
						e.preventDefault();

						const formData = new FormData(e.target);
						const slam = formData.get("slams");
						const year = formData.get("year");
						{
							slam == "WM"
								? setSlamData(atpWimbledonScores2023) & console.log("setting slam data...") & setDisplay("visible")
								: slam == "WW"
									? setSlamData(wtaWimbledonScores2023) & setDisplay("visible")
									: console.log("no slam data...");
						}
					}}
				>
					<label className="d-flex align-items-center mx-3 fw-bold" htmlFor="slams">
						Tournament
					</label>
					<select className="form-select mx-2 w-auto" id="slams" name="slams">
						<option value="AOM">Australian Open (M)</option>
						<option value="AOW">Australian Open (W)</option>
						<option value="FOM">French Open (M)</option>
						<option value="FOW">French Open (W)</option>
						<option value="WM">Wimbledon (M)</option>
						<option value="WW">Wimbledon (W)</option>
						<option value="USOM">US Open (M)</option>
						<option value="USOW">US Open (W)</option>
					</select>
					<label className="d-flex align-items-center mx-3 fw-bold" htmlFor="year">
						Year
					</label>
					<select className="form-select mx-2 w-auto" name="year">
						<option value="2024">2024</option>
						<option value="2023">2023</option>
					</select>
					<button className="btn btn-success mx-3" type="submit">
						Submit
					</button>
				</form>

				<div className={`buttonGroup d-flex justify-content-center px-4 mt-4 ${displayDraw}`}>
					<button className="btn btn-outline-success mx-3 text-center btn-round" onClick={handleRoundClick} name="0">
						1st Round
					</button>
					<button className="btn btn-outline-success mx-3 text-center btn-round" onClick={handleRoundClick} name="1">
						2nd Round
					</button>
					<button className="btn btn-outline-success mx-3 text-center btn-round" onClick={handleRoundClick} name="2">
						3rd Round
					</button>
					<button className="btn btn-outline-success mx-3 text-center btn-round" onClick={handleRoundClick} name="3">
						4th Round
					</button>
					<button className="btn btn-outline-success mx-3 text-center btn-round" onClick={handleRoundClick} name="4">
						Quarterfinals
					</button>
					<button className="btn btn-outline-success mx-3 text-center btn-round" onClick={handleRoundClick} name="5">
						Semifinals
					</button>
					<button className="btn btn-outline-success mx-3 text-center btn-round" onClick={handleRoundClick} name="6">
						Finals
					</button>
				</div>
			</div>
			<div className="round-headers-container sticky-top bg-body w-100" style={{ top: "33%" }}>
				<div className={`d-flex border-bottom round-headers ${displayDraw}`}>
					<h3 className="text-center pad-1">1st Round</h3>
					<h3 className="text-center pad-2">2nd Round</h3>
					<h3 className="text-center pad-3">3rd Round</h3>
				</div>
			</div>
			<div className="carousel-container">
				<div className={`d-flex px-4 pt-5 ${displayDraw}`} ref={ref}>
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
				<button className="prev-next-button next">
					<FontAwesomeIcon icon={faForward} size="xl" style={{ color: "#1e860a" }} />
				</button>
				<button className="prev-next-button previous">
					<FontAwesomeIcon icon={faBackward} size="xl" style={{ color: "#1e860a" }} />
				</button>
			</div>
		</>
	);
}
