import React from "react"
import { useNavigate } from "react-router-dom"
import useReviews from "../../custom-hooks/useReviews"
import Review from "../review/Review"

const ReviewOverview = () => {
	const [reviews] = useReviews()
	const first3ofArray = reviews.slice(0, 3)
	const navigate = useNavigate()
	return (
		<div className="flex items-center flex-col">
			<p className="text-center my-12 font-mono font-bold text-4xl">
				User review (3)
			</p>
			<div className="">
				{first3ofArray.map((review) => (
					<Review key={review.id} review={review} showButton={false} ></Review>
				))}
			</div>
			<button className="bg-[#EE3848] py-2 px-6 text-xl text-white rounded-lg" onClick={() => navigate("/reviews")}>
				See all reviews
			</button>
		</div>
	)
}

export default ReviewOverview
