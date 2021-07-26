import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider, Client, defaultExchanges } from "urql";

const client = new Client({
	url: "https://demo-graphql-yoga.glitch.me",
	exchanges: defaultExchanges,
});

ReactDOM.render(
	<Provider value={client}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
