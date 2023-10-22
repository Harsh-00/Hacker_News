import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comments from "../comp/Comments";

const News = () => {
	const loc = useLocation();
	const newsID = loc.pathname.split("/").at(-1);
	const [data, setData] = useState("");

	const d = new Date(data.created_at);
	const final_Date = d.toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	async function APIcallByID() {
		const url = `http://hn.algolia.com/api/v1/items/` + newsID;

		const res = await fetch(url);
		setData(await res.json());
	}

	useEffect(() => {
		APIcallByID();
	}, []);

	return (
		<div className="w-11/12 mx-auto mt-8">
			<p className="text-2xl">{data.title}</p>

			<div className="mt-2 opacity-80">
				<span>{`${data.points} Points | By ${data.author} | ${final_Date} || `}</span>
				<span className="text-blue-500 underline">
					<a className="hover:opacity-70" href={data.url}>
						website
					</a>
				</span>
			</div>

			<h3 className="mt-16 text-lg">Comments : </h3>
			<Comments Data={data} />
		</div>
	);
};

export default News;
