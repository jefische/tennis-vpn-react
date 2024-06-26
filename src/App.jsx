import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Home, Australian, French, Wimbledon, USO, Contact } from "./Pages";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<div className="container-custom">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/australian-open" element={<Australian />} />
					<Route path="/french-open" element={<French />} />
					<Route path="/wimbledon" element={<Wimbledon />} />
					<Route path="/us-open" element={<USO />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
			<ScrollToTop />
		</BrowserRouter>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
