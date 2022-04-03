import React from "react"
import "./home.css"

const Home = () => {
	return (
		<div className="grid h-[90vh] home-container">
			<div className="flex flex-col justify-center">
				<p className="text-[30px] md:text-[50px] lg:text-[70px] font-sans text-[#8C0E83] font-black">
					The Best Laptop ever
				</p>
				<p className="text-[30px] md:text-[50px] lg:text-[80px] font-sans text-[#551F1F] font-black">
					Apple MacBook Air
				</p>
				<p className="md:text-xl mt-4 text-gray-500">
					The Apple MacBook Air (M1, 2020) isn't just the best laptop
					Apple has ever made, it's the best laptop money can buy
					right now. This is the first time a MacBook has topped our
					list, but the MacBook Air (M1, 2020) is worthy of this
					spot.Thanks to the revolutionary ARM-based Apple M1 chip
					that powers the new MacBook Air
				</p>
			</div>
			<div className="flex justify-end">
				<img
					className="w-[450px]"
					src="https://i.pinimg.com/originals/c5/95/c9/c595c9dc092cb7fbfecedde02a6952ae.png"
					alt=""
				/>
			</div>
		</div>
	)
}

export default Home
