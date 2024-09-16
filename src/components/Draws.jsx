import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import DrawGroup from "./DrawGroup";
import { atpWimbledonScores, atpWimbledonScores2023 } from "../../data/scoresData";
import "flickity/dist/flickity.min.css";
import Flickity from "react-flickity-component";

const flickityOptions = {
	pageDots: false,
	cellAlign: "left",
	groupCells: 1,
	adaptiveHeight: true,
	// reloadOnUpdate: true,
	draggable: true,
	freeScroll: true,
};

export default function Draws({ title, updated, children }) {
	const [selection, setSelection] = useState({});
	const [displayRoundButtons, setRoundButtons] = useState(false);
	const [displayDraw, setDisplay] = useState("invisible");
	const ref = useRef(null);

	function handleRoundClick(e) {
		ref.current.select(e.target.name);
		window.scrollTo({ top: 0, behavior: "smooth" });

		ref.current.selectedElement.classList.remove("columnA");
		ref.current.selectedElement.classList.remove("columnB");
		ref.current.selectedElement.classList.remove("columnC");
		ref.current.selectedElement.classList.add("columnA");

		if (ref.current.getCellElements()[Number(e.target.name) + 1]) {
			ref.current.getCellElements()[Number(e.target.name) + 1].classList.remove("columnA");
			ref.current.getCellElements()[Number(e.target.name) + 1].classList.remove("columnB");
			ref.current.getCellElements()[Number(e.target.name) + 1].classList.remove("columnC");
			ref.current.getCellElements()[Number(e.target.name) + 1].classList.add("columnB");
		}

		if (ref.current.getCellElements()[Number(e.target.name) + 2]) {
			ref.current.getCellElements()[Number(e.target.name) + 2].classList.remove("columnA");
			ref.current.getCellElements()[Number(e.target.name) + 2].classList.remove("columnB");
			ref.current.getCellElements()[Number(e.target.name) + 2].classList.remove("columnC");
			ref.current.getCellElements()[Number(e.target.name) + 2].classList.add("columnC");
		}

		if (ref.current.getCellElements()[Number(e.target.name) - 1]) {
			ref.current.getCellElements()[Number(e.target.name) - 1].classList.remove("columnA");
			ref.current.getCellElements()[Number(e.target.name) - 1].classList.remove("columnB");
			ref.current.getCellElements()[Number(e.target.name) - 1].classList.remove("columnC");
		}
	}

	useEffect(() => {
		const nextBtns = document.querySelector(".flickity-prev-next-button.next");
		const prevBtns = document.querySelector(".flickity-prev-next-button.previous");

		function handleHorizontalScroll(e) {
			ref.current.selectedElement.classList.remove("columnA");
			ref.current.selectedElement.classList.remove("columnB");
			ref.current.selectedElement.classList.remove("columnC");
			ref.current.selectedElement.classList.add("columnA");

			let index = ref.current.selectedIndex;

			if (ref.current.getCellElements()[index + 1]) {
				ref.current.getCellElements()[index + 1].classList.remove("columnA");
				ref.current.getCellElements()[index + 1].classList.remove("columnB");
				ref.current.getCellElements()[index + 1].classList.remove("columnC");
				ref.current.getCellElements()[index + 1].classList.add("columnB");
			}

			if (ref.current.getCellElements()[index + 2]) {
				ref.current.getCellElements()[index + 2].classList.remove("columnA");
				ref.current.getCellElements()[index + 2].classList.remove("columnB");
				ref.current.getCellElements()[index + 2].classList.remove("columnC");
				ref.current.getCellElements()[index + 2].classList.add("columnC");
			}

			if (ref.current.getCellElements()[index - 1]) {
				ref.current.getCellElements()[index - 1].classList.remove("columnA");
				ref.current.getCellElements()[index - 1].classList.remove("columnB");
				ref.current.getCellElements()[index - 1].classList.remove("columnC");
			}
		}

		if (ref.current) {
			nextBtns.addEventListener("click", handleHorizontalScroll);
			prevBtns.addEventListener("click", handleHorizontalScroll);
			return () => {
				nextBtns.removeEventListener("click", handleHorizontalScroll);
				prevBtns.removeEventListener("click", handlePhandleHorizontalScrollrevScroll);
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
						console.log(formData.get("slams"));

						setRoundButtons(!displayRoundButtons);
						setDisplay(displayRoundButtons ? "invisible" : "visible");
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
					<button className="btn btn-success" type="submit">
						Submit
					</button>
				</form>
				{displayRoundButtons ? (
					<div className="buttonGroup d-flex justify-content-center px-4">
						<button className="btn btn-success mx-3 text-center btn-round" onClick={handleRoundClick} name="0">
							1st Round
						</button>
						<button className="btn btn-success mx-3 text-center btn-round" onClick={handleRoundClick} name="1">
							2nd Round
						</button>
						<button className="btn btn-success mx-3 text-center btn-round" onClick={handleRoundClick} name="2">
							3rd Round
						</button>
						<button className="btn btn-success mx-3 text-center btn-round" onClick={handleRoundClick} name="3">
							4th Round
						</button>
						<button className="btn btn-success mx-3 text-center btn-round" onClick={handleRoundClick} name="4">
							Quarterfinals
						</button>
						<button className="btn btn-success mx-3 text-center btn-round" onClick={handleRoundClick} name="5">
							Semifinals
						</button>
						<button className="btn btn-success mx-3 text-center btn-round" onClick={handleRoundClick} name="6">
							Finals
						</button>
					</div>
				) : (
					<div></div>
				)}
			</div>

			<div className="d-flex pt-5 border border-black sticky-top" style={{ top: "30%" }}>
				<h3 className="text-center ps-3" style={{ flexBasis: "100%" }}>
					headers
				</h3>
			</div>

			<Flickity className={`carousel px-4 pt-5 ${displayDraw}`} options={flickityOptions} flickityRef={(c) => (ref.current = c)}>
				<div className="columnA roundGroup">
					<h3 className="text-center">1st Round</h3>
					<DrawGroup scores={atpWimbledonScores2023} round={1} connector={false} />
				</div>
				<div className="columnB roundGroup">
					<h3 className="text-center">2nd Round</h3>
					<DrawGroup scores={atpWimbledonScores2023} round={2} connector={true} />
				</div>
				<div className="columnC roundGroup">
					<h3 className="text-center">3rd Round</h3>
					<DrawGroup scores={atpWimbledonScores2023} round={3} connector={true} />
				</div>
				<div className="roundGroup">
					<h3 className="text-center">4th Round</h3>
					<DrawGroup scores={atpWimbledonScores2023} round={4} connector={true} />
				</div>
				<div className="roundGroup">
					<h3 className="text-center">Quarterfinals</h3>
					<DrawGroup scores={atpWimbledonScores2023} round={5} connector={true} />
				</div>
				<div className="roundGroup">
					<h3 className="text-center">Semifinals</h3>
					<DrawGroup scores={atpWimbledonScores2023} round={6} connector={true} />
				</div>
				<div className="roundGroup">
					<h3 className="text-center">Finals</h3>
					<DrawGroup scores={atpWimbledonScores2023} round={7} connector={true} />
				</div>
			</Flickity>

			{/* <div className="whitespace"></div> */}
		</>
	);
}
