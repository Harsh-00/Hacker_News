import React from "react";

const SearchBox = ({ setQuery }) => {
	var tmp;
	function setInput(event) {
		tmp = event.target.value;
	}

	function setValue() {
		// console.log(tmp);
		setQuery(tmp);
	}

	return (
		<div className="mt-10 flex justify-center items-baseline gap-4">
			<input
				type="text"
				id="first"
				onChange={setInput}
				value={tmp}
				placeholder="Enter Input"
				className="border-2 rounded-lg w-[40%] px-2 py-1"
			></input>
			<button onClick={setValue} className="border-2 bg-red-200 rounded-2xl px-3 py-1">Search</button>
		</div>
	);
};

export default SearchBox;
