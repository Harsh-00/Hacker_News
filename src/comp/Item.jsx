import React from "react";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
	const navi = useNavigate();
	function ExpandHandler() {
		navi(`/${props.objectID}`);
	}
	return (
		<div className="border-2 bg-gray-300 rounded-lg flex justify-between p-2 flex-col sm:flex-row shadow-lg">
			<p
				className="hover:underline hover:opacity-60 cursor-pointer"
				onClick={ExpandHandler}
			>
				{props?.title?.slice(0, 60) +
					(props?.title?.length > 60 ? `....` : ``)}
			</p>
			<p className="italic">{`By : ${props.author}`}</p>
		</div>
	);
};

export default Item;
