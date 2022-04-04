import React from "react"
import Rating from "react-rating"

const Review = ({
	review: { name, id, ratings, description },
	showButton,
	handleHideReview,
}) => {
	return (
		<div className="border-red-100 border-2 p-6 rounded-lg mb-5 flex flex-col items-center w-full">
			<p className="text-2xl font-bold text-center">{name}</p>
			<p className="text-justify text-sm" title={description}>
				{description.length < 400
					? description
					: description.slice(0, 400) + "..."}
			</p>
			<div className="border-purple-200 border-2 px-4 py-2 my-3 rounded-md">
				<p className="mx-2 text-center text-xl font font-semibold font-mono">Ratings: </p>
				<Rating readonly initialRating={ratings} />
			</div>
			{showButton && (
				<button
					onClick={() => handleHideReview(id)}
					className="bg-red-600 mt-4 text-white px-8 rounded-lg border-y-green-800 border-2 border-x-blue-800 py-1"
				>
					Hide Review
				</button>
			)}
		</div>
	)
}

export default Review
