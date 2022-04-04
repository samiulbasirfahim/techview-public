import React from "react"
import useReviews from "../../custom-hooks/useReviews"
import Review from "../review/Review"

const Reviews = () => {
	const [reviews, setReviews] = useReviews()
	const handleHideReview = (id) => {
		const newReviewsList = reviews.filter((review) => review.id !== id)
        setReviews(newReviewsList)
	}
	return (
		<div>
			{reviews.map((review) => (
				<Review key={review.id} review={review} handleHideReview={handleHideReview} showButton={true} />
			))}
		</div>
	)
}

export default Reviews
