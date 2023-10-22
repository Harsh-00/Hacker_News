import React from "react";

const Comments = ({ Data }) => {
	const d = new Date(Data.created_at);
	const final_Date = d.toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	return (
		<div className=" mt-3 ">
			<div className="bg-[#E4F1FF] p-2 px-3 rounded-xl break-words">
				<span className="opacity-50 font-medium">{`${Data.author} | ${final_Date}`}</span>
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
