import { Route, Routes } from "react-router-dom"
import DashBoard from "./components/dashboard/DashBoard"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import NotFound from "./components/notFound/NotFound"
import Reviews from "./components/reviews/Reviews"

function App() {
	return (
		<div className="">
			<div className="mx-4 md:mx-8 lg:mx-20">
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/reviews" element={<Reviews />}></Route>
					<Route path="/dashboard" element={<DashBoard />}></Route>
					<Route path="*" element={<NotFound></NotFound>}></Route>
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
