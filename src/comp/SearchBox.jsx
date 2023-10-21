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
		<div>
			<input
				type="text"
				id="first"
				onChange={setInput}
				value={tmp}
				placeholder="Enter Input"
				className="border-2 rounded-lg"
			></input>
			<button onClick={setValue}>Search</button>
		</div>
	);
};

export default SearchBox;
