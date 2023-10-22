import React from "react";

const Comments = ({ Data }) => {
	const final_Date = new Date(Data.created_at).toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	return (
		//Here we have used Recursion, in which we are calling "Comments" component Recursively.

		<div className=" mt-3 ">
			<div className="bg-[#E4F1FF] p-2 px-3 rounded-xl break-words text-sm">
				<span className="opacity-100 text-gray-500 cursor-pointer font-medium">{`${Data.author} | ${final_Date}`}</span>

				<p className="mt-1 text-justify ">{Data.text}</p>
			</div>

			{Data?.children?.map((ele) => (
				<div className="pl-10" key={ele.id}>
					<Comments Data={ele} />
				</div>
			))}
		</div>
	);
};

export default Comments;
