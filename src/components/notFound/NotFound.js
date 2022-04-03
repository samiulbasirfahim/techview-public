import React from "react"

const NotFound = () => {
	return (
		<div className="grid grid-cols-2 justify-items-center items-center h-[90vh] gap-10">
			<div>
				<div className="flex flex-col justify-center items-center">
					<p className="text-gray-500 font-mono text-8xl">
						Opps ! 404
					</p>
					<p className="mt-8 text-xl font-bold font-sans text-gray-400">
						The page you are looking for cannot be found
					</p>
				</div>
			</div>
			<div className="">
				<img
					className="rounded-3xl"
					src="https://kicksdigitalmarketing.com/wp-content/uploads/2019/09/iStock-1142986365.jpg"
					alt=""
				/>
			</div>
		</div>
	)
}

export default NotFound
