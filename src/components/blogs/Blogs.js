import React from "react"

const Blogs = () => {
	return (
		<div className="flex flex-col items-center">
			<div>
				<p>What is context api?</p>
				<p>
					The Context API is a React structure that enables you to
					exchange unique details and assists in solving prop-drilling
					from all levels of your application.. basically Its work
					provider and consumer system . provider is a component that
					as it's names suggests provides the state to its children.
					It will hold the "store" and be the parent of all the
					components that might need that store. Consumer as it so
					happens is a component that consumes and uses the state .
				</p>
			</div>
			<div>
				<p>What is semantic tag in html?</p>
				<p>
					Semantic elements have meaningful names which tells about
					type of content. For example header, footer, table, … etc.
					HTML5 introduces many semantic elements as mentioned below
					which make the code easier to write and understand for the
					developer as well as instructs the browser on how to treat
					them.
					<br />
					Semantic elements have meaningful names which tells about
					type of content. For example header, footer, table, … etc.
					HTML5 introduces many semantic elements as mentioned below
					which make the code easier to write and understand for the
					developer as well as instructs the browser on how to treat
					them.
				</p>
			</div>
			<div>
				<p>Inline elements vs inline block elements?</p>
				<p>
					inline elements display in a line. They do not force the
					text after them to a new line. An anchor (or link) is an
					example of an inline element. You can put several links in a
					row, and they will display in a line.such as ( a, br,
					button, i, img)
					<br />A block-level element always starts on a new line and
					takes up the full width available. An inline element does
					not start on a new line and it only takes up as much width
					as necessary..
				</p>
			</div>
		</div>
	)
}

export default Blogs
