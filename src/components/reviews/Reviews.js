import React, { useEffect, useState } from "react"
import useReviews from "../../custom-hooks/useReviews"
import Review from "../review/Review"

const Reviews = () => {
	const [fakeReview, setFakeReviews] = useState([])
	const [reviews, setReviews] = useReviews()
	useEffect(() => {
		setFakeReviews(reviews)
	}, [reviews])
	const handleHideReview = (id) => {
		const newReviewsList = fakeReview.filter((review) => review.id !== id)
		setFakeReviews(newReviewsList)
	}

	const handleUndoReview = () => {
        setFakeReviews(reviews)
    }

	return (
		<div className="flex flex-col items-center">
			{fakeReview.length === 0 ? (
				<button
					onClick={handleUndoReview}
					className="bg-green-600 mt-4 text-white px-8 rounded-lg border-y-green-800 border-2 border-x-blue-800 py-1"
				>
					Undo delete
				</button>
			) : (
				<p className="text-center my-12 font-mono font-bold text-4xl">
					Total review: {fakeReview.length}
				</p>
			)}
			{fakeReview.map((review) => (
				<Review
					key={review.id}
					review={review}
					handleHideReview={handleHideReview}
					showButton={true}
				/>
			))}
		</div>
	)
}

export default Reviews
