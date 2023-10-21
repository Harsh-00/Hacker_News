import { useEffect, useState } from "react";
import "./App.css";
import List from "./comp/List";
import Navbar from "./comp/Navbar";
import SearchBox from "./comp/SearchBox";

function App() {
	const [srch, setSrch] = useState("");
	const [data, setData] = useState("");

	console.log(srch);
	async function APIcall(srch) {
		const url = " http://hn.algolia.com/api/v1/search?query=" + srch;

		const res = await fetch(url);
		setData(await res.json());
		console.log(data);
	}

	useEffect(() => {
		APIcall(srch);
	}, [srch]);
	return (
		<div className="">
			<Navbar />
			<div className="w-11/12 mx-auto">
				<SearchBox setQuery={setSrch} />
				<List info={data} />
			</div>
		</div>
	);
}

export default App;
