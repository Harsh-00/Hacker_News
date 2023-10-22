import React from "react";
import logo from "../img/logo2.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	//use for navigating to different Routes
	const navi = useNavigate();

	return (
		<div className="bg-[#6720e9] h-16 flex py-1 gap text-white justify-between fixed w-full  ">
			<img
				src={logo}
				alt="logo"
				className="w-32 pl-3  cursor-pointer"
				onClick={() => navi("/")}
			></img>

			<div className="invisible md:visible">
				<div
					className="w-64 text-xl mt-4 hover:underline cursor-pointer font-semibold  "
					onClick={() => navi("/")}
				>
					Home
				</div>
			</div>
		</div>
	);
};

export default Navbar;
