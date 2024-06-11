import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom";

const App = () => {
	return <div>Hello World</div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
