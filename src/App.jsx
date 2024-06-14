import React from "react";
import { createRoot } from "react-dom/client";
import Navigation from "./Navigation";
import Hero from "./Hero";

const App = () => {
	return (
		<>
			<Navigation />
			<Hero />
			<p>my tennis vpn site</p>
		</>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
