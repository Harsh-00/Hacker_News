import React from "react";
import { FcSearch } from "react-icons/fc";

const SearchBox = ({ setQuery }) => {
	var tmp;
	function setInputHandler(event) {
		tmp = event.target.value;
	}

	function setValueHandler() {
		// console.log(tmp);
		setQuery(tmp);
	}

	return (
		<div className="pt-28 flex justify-center gap-4">
			<input
				type="text"
				id="first"
				onChange={setInputHandler}
				onKeyDown={(ev) =>
					ev.key === "Enter" ? setValueHandler() : null
				}
				placeholder="Enter Search Input"
				className="border-2 rounded-lg w-[45%] px-2 py-1.5"
			></input>
			<button
				onClick={setValueHandler}
				className="border-2 rounded-full px-2.5 py-1.5 hover:bg-gray-100"
			>
				<FcSearch className="text-xl "></FcSearch>
			</button>
		</div>
	);
};

export default SearchBox;
