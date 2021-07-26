import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider, Client, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";

const cache = cacheExchange({});

const client = new Client({
	url: "https://demo-graphql-yoga.glitch.me",
	exchanges: [dedupExchange, cache, fetchExchange],
});

ReactDOM.render(
	<Provider value={client}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
