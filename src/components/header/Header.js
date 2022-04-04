import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
	return (
		<div>
			<nav className="">
				<ul className=" md:flex justify-center items-center h-[8vh]">
					<li>
						<NavLink
							className="mx-2 px-5 font-semibold text-xl"
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
					<li>
						<NavLink
							className="mx-2 px-5 font-semibold text-xl"
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
					<li>
						<NavLink
							className="mx-2 px-5 font-semibold text-xl"
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
					<li>
						<NavLink
							className="mx-2 px-5 font-semibold text-xl"
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
					<li>
						<NavLink
							className="mx-2 px-5 font-semibold text-xl"
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
