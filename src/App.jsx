import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Home, Australian, French, Wimbledon, USO, Contact, NationalBank, SlamResults } from "./Pages";
import ScrollToTop from "./components/ScrollToTop";
import "./css/styles-draws.scss";

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/australian-open" element={<Australian />} />
				<Route path="/french-open" element={<French />} />
				<Route path="/wimbledon" element={<Wimbledon />} />
				<Route path="/us-open" element={<USO />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/national-bank-open" element={<NationalBank />} />
				<Route path="/grand-slam-results" element={<SlamResults />} />
			</Routes>

			<ScrollToTop />
			<Footer />
		</BrowserRouter>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
