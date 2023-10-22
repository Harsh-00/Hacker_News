import React from "react";
import { useEffect, useState } from "react";
import List from "../comp/List";
import SearchBox from "../comp/SearchBox";

const Home = () => {
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
		<div className="w-11/12 mx-auto max-w-[1000px]">
			<SearchBox setQuery={setSrch} />
			<List info={data} />
		</div>
	);
};

export default Home;
