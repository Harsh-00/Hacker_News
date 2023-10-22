import React from "react";
import { useEffect, useState } from "react";
import List from "../comp/List";
import SearchBox from "../comp/SearchBox";
import CallFailed from "../comp/CallFailed";
import Loader from "../comp/Loader";

const Home = () => {
	const [srch, setSrch] = useState("");
	const [data, setData] = useState("");
	const [load, setLoad] = useState(false);
	const [failed, setFailed] = useState(false);

	console.log(srch);
	async function APIcall(srch) {
		try {
			setLoad(true);
			const url = " http://hn.algolia.com/api/v1/search?query=" + srch;

			const res = await fetch(url);
			setData(await res.json());
			console.log(data);
			setLoad(false);
		} catch (e) {
			setLoad(false);
			setFailed(true);
		}
	}

	useEffect(() => {
		APIcall(srch);
	}, [srch]);

	return (
		<div className="w-11/12  mx-auto max-w-[1000px] ">
			{failed ? (
				<CallFailed />
			) : load ? (
				<Loader />
			) : (
				<div className=" px-14 pb-4 ">
					<SearchBox setQuery={setSrch} />
					<List info={data} />
				</div>
			)}
		</div>
	);
};

export default Home;
