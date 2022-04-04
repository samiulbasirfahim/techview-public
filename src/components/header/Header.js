import React, { useState } from "react"
import { TiThMenu } from "react-icons/ti"
import { AiOutlineClose } from "react-icons/ai"

import { NavLink } from "react-router-dom"

const Header = () => {
	const [navOpen, setNavOpen] = useState(false)
	return (
		<div className=" h-[8vh] w-full flex">
			<nav className=" w-full">
				<div className="flex justify-between w-full md:hidden">
					<p>Tech view</p>
					{navOpen ? (
						<AiOutlineClose onClick={() => setNavOpen(!navOpen)} />
					) : (
						<TiThMenu
							onClick={() => setNavOpen(!navOpen)}
						></TiThMenu>
					)}
				</div>
				<ul style={navOpen ? {top: '20px'} : {}} className="absolute top-[-800px]  md:static flex flex-col md:flex-row justify-center items-center">
					<li className="my-4">
						<NavLink
							className="mx-2 px-5 font-semibold text-xl  "
							style={({ isActive }) => {
								return isActive
									? {
											color: "#EE3848",
											borderBottom: "3px solid #EE3848",
											paddingBottom: "10px",
									  }
									: {
											borderBottom: "3px solid #F8E9E5",
											paddingBottom: "5px",
									  }
							}}
							to="/"
						>
							HOME
						</NavLink>
					</li>
					<li className="my-4">
						<NavLink
							className="mx-2 px-5 font-semibold text-xl  "
							style={({ isActive }) => {
								return isActive
									? {
											color: "#EE3848",
											borderBottom: "3px solid #EE3848",
											paddingBottom: "10px",
									  }
									: {
											borderBottom: "3px solid #F8E9E5",
											paddingBottom: "5px",
									  }
							}}
							to="/reviews"
						>
							REVIEWS
						</NavLink>
					</li>
					<li className="my-4">
						<NavLink
							className="mx-2 px-5 font-semibold text-xl "
							style={({ isActive }) => {
								return isActive
									? {
											color: "#EE3848",
											borderBottom: "3px solid #EE3848",
											paddingBottom: "10px",
									  }
									: {
											borderBottom: "3px solid #F8E9E5",
											paddingBottom: "5px",
									  }
							}}
							to="/dashboard"
						>
							DASHBOARD
						</NavLink>
					</li>
					<li className="my-4">
						<NavLink
							className="mx-2 px-5 font-semibold text-xl "
							style={({ isActive }) => {
								return isActive
									? {
											color: "#EE3848",
											borderBottom: "3px solid #EE3848",
											paddingBottom: "10px",
									  }
									: {
											borderBottom: "3px solid #F8E9E5",
											paddingBottom: "5px",
									  }
							}}
							to="/blogs"
						>
							BLOGS
						</NavLink>
					</li>
					<li className="my-4">
						<NavLink
							className="mx-2 px-5 font-semibold text-xl "
							style={({ isActive }) => {
								return isActive
									? {
											color: "#EE3848",
											borderBottom: "3px solid #EE3848",
											paddingBottom: "10px",
									  }
									: {
											borderBottom: "3px solid #F8E9E5",
											paddingBottom: "5px",
									  }
							}}
							to="/about"
						>
							ABOUT
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
