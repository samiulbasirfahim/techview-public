import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import NotFound from "./components/notFound/NotFound"

function App() {
	return (
		<div className="mx-4 md:mx-8 lg:mx-20">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/home" element={<Home/>}></Route>
				<Route path="*" element={<NotFound></NotFound>} ></Route>
			</Routes>
		</div>
	)
}

export default App
