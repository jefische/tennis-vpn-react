import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Home, Australian, French, Wimbledon, USO } from "./Pages";
import SideContent from "./SideContent";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<div className="container">
					<div className="d-flex mt-4">
						<div className="col-lg-9 p-3 pt-0">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/australian-open" element={<Australian />} />
								<Route path="/french-open" element={<French />} />
								<Route path="/wimbledon" element={<Wimbledon />} />
								<Route path="/us-open" element={<USO />} />
							</Routes>
						</div>
						<Routes>
							<Route path="/" element={<SideContent />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
