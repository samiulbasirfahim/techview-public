import React from "react"

const Review = ({review}) => {
	return (
		<div
		
			className="border-red-100 border-2 p-6 rounded-lg mb-5"
		>
			<p className="text-2xl font-bold text-center">{review.name}</p>
			<p className="text-justify text-sm" title={review.description}>
				{review?.description.length < 400
					? review?.description
					: review?.description.slice(0, 400) + "..."}
			</p>
		</div>
	)
}

export default Review
