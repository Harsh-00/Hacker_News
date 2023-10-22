import React from "react";
import Item from "./Item";

const List = ({ info }) => {
	const hit = info.hits;
	console.log(hit);
	return (
		<div className="my-10 flex flex-col gap-2">
			{hit?.map((ele) => (
				<Item {...ele} key={ele.objectID}></Item>
			))}
		</div>
	);
};

export default List;
