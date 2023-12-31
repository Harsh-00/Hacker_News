import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comments from "../comp/Comments";
import CallFailed from "../comp/CallFailed";
import Loader from "../comp/Loader";

const News = () => {
	//to get ObjectID from url
	const loc = useLocation();
	const newsID = loc.pathname.split("/").at(-1);

	//store API call data
	const [data, setData] = useState("");

	const [load, setLoad] = useState(false);
	const [failed, setFailed] = useState(false);

	//Date Conversion
	const final_Date = new Date(data.created_at).toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	async function APIcallByID() {
		try {
			setLoad(true);
			const url = `http://hn.algolia.com/api/v1/items/` + newsID;

			const res = await fetch(url);
			setData(await res.json());
			setLoad(false);
		} catch (e) {
			setLoad(false);
			setFailed(true);
		}
	}

	useEffect(() => {
		APIcallByID();
	}, []);

	return (
		<div className="w-[100vw]">
			{failed ? (
				<CallFailed />
			) : load ? (
				<Loader />
			) : (
				<div className="w-11/12 mx-auto pt-28 bg-[#F5F7F8] p-8">
					<p className="text-3xl">{data.title}</p>

					<div className="mt-2.5 opacity-80">
						<span>{`${data.points} Points | By ${data.author} | ${final_Date} || `}</span>
						<span className="text-blue-500 underline">
							<a className="hover:opacity-70" href={data.url}>
								Source
							</a>
						</span>
					</div>

					{/* Comment section  */}
					<h3
						className="mt-14 text-lg
					font-medium"
					>
						Comments
					</h3>
					<Comments Data={data} />
				</div>
			)}
		</div>
	);
};

export default News;
