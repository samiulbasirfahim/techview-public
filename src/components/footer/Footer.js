import React, { useEffect, useState } from "react"
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"
import { useLocation } from "react-router-dom"
const Footer = () => {
	const {pathname} = useLocation()
	const [hideFooter, setHideFooter] = useState(false)
	useEffect(() => {
		if(pathname.includes('/blogs') || pathname.includes('/dashboard') || pathname.includes('/reviews') ||pathname === '/'){
			setHideFooter(false);
		} else {
			setHideFooter(true);
	}},[pathname])
	return (
		<div className={hideFooter ? "hidden" : "mt-24 bg-[#F8E9E5] flex flex-col items-center justify-center py-16"}>
			<div className="block md:flex">
				<a
					target="_blank"
					href="https://www.facebook.com/FAHIMekermall/" rel="noreferrer"
				>
					<FaFacebook size={40} className="m-8" />
				</a>
				<a target="_blank" href="https://twitter.com/FAHIMekermall" rel="noreferrer">
					<FaTwitter size={40} className="m-8" />
				</a>

				<a target="_blank" href="https://github.com/FAHIMekermall" rel="noreferrer">
					<FaGithub size={40} className="m-8" />
				</a>
			</div>
			<div>
				<p className="font-semibold text-sm">All copyright reserved || 2022</p>
			</div>
		</div>
	)
}

export default Footer
