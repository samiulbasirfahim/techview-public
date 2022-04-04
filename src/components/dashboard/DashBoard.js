import React from "react"
import {
	Area,
	Bar,
	BarChart,
	CartesianGrid,
	ComposedChart,
	Legend,
	Line,
	LineChart,
	Pie,
	PieChart,
	ResponsiveContainer,
	Text,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"
import useData from "../../custom-hooks/useData"

// const DashBoard = () => {
// 	const [data] = useData()
// 	return (
// 		<div className="grid grid-col-1 justify-items-center md:grid-cols-2">
// 			<LineChart width={600} height={300} data={data}>
// 				<Line type="monotone" dataKey="investment" stroke="red" />
// 				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
// 				<Legend verticalAlign="top" />
// 				<XAxis dataKey="month" />
// 				<YAxis />
// 				<Tooltip />
// 			</LineChart>
// 			<ComposedChart width={600} height={300} data={data}>
// 				<XAxis dataKey="month" />
// 				<Area
// 					type="monotone"
// 					dataKey="sell"
// 					fill="#AA77A7"
// 					stroke="#87057D"
// 				/>
// 				<YAxis />
// 				<Tooltip />
// 				<CartesianGrid stroke="#00ED0D" strokeDasharray="4" />
// 			</ComposedChart>
// 			<PieChart width={600} height={300} data={data}>
// 				<Pie
// 					dataKey="sell"
// 					startAngle={180}
// 					endAngle={0}
// 					data={data}
// 					outerRadius={80}
// 					fill="#AA77A7"
// 					label="month"
// 				/>
// 				<Legend />
// 				<Tooltip/>
// 			</PieChart>
// 		</div>
// 	)
// }

const DashBoard = () => {
	const [data] = useData()
	return (
		<>
			<ResponsiveContainer className="mx-4" width="100%" height={400}>
				<LineChart width={600} height={300} data={data}>
					<Line type="monotone" dataKey="investment" stroke="red" />
					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
					<Legend verticalAlign="top" />
					<XAxis dataKey="month" /> <YAxis />
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
			<ResponsiveContainer className="mx-4" width="100%" height={400}>
				<ComposedChart width={600} height={300} data={data}>
					<XAxis dataKey="month" />
					<Area
						type="monotone"
						dataKey="sell"
						fill="#AA77A7"
						stroke="#87057D"
					/>
					<YAxis />
					<Tooltip />
					<CartesianGrid stroke="#00ED0D" strokeDasharray="4" />
				</ComposedChart>
			</ResponsiveContainer>
			<ResponsiveContainer className="mx-4" width="100%" height={400}>
				<PieChart width={600} height={300} data={data}>
					<Pie
						dataKey="sell"
						startAngle={180}
						endAngle={0}
						data={data}
						outerRadius={80}
						fill="#AA77A7"
						label="month"
					/>
					<Legend />
					<Tooltip />
				</PieChart>
			</ResponsiveContainer>
		</>
	)
}

export default DashBoard
