import React from "react";
import { createRoot } from "react-dom/client";
import Navigation from "./Navigation";
import Hero from "./components/Hero";
import Body from "./Body";

const App = () => {
	return (
		<>
			<Navigation />
			<Body />
		</>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
