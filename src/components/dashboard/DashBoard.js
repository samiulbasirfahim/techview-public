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
					<Legend verticalAlign="top"></Legend>
					<YAxis />
					<Tooltip />
					<CartesianGrid stroke="#00ED0D" strokeDasharray="4" />
				</ComposedChart>
			</ResponsiveContainer>
			<ResponsiveContainer className="mx-4" width="100%" height={400}>
				<PieChart width={600} height={300} data={data}>
					<Pie
						dataKey="investment"
						startAngle={360}
						endAngle={0}
						data={data}
						outerRadius={180}
						fill="#EE3848"
						label="month"
					/>
					<Pie
						dataKey="sell"
						startAngle={360}
						endAngle={0}
						data={data}
						outerRadius={90}
						fill="#AA77A7"
						label="month"
					/>
					<Legend  />
					<Tooltip />
				</PieChart>
			</ResponsiveContainer>
		</>
	)
}

export default DashBoard
