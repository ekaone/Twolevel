import React from 'react'
import Typed from "react-typed"
import bgImage from '../../assets/default.jpg'

export default function Landing() {

	const textLines = [
		`Hey! 👸💔 Check out the nice library
		<a href="https://github.com/mattboldt/typed.js">Typed.js!</a>`,
		`get cool stuff  <a href="https://twitter.com/dannyeka" target="_blank">@dannyeka</a>`
	]

	return (
		<>
			<div className="main" style={{ backgroundImage: `url(${bgImage})` }}>
				<div className="cover black" data-color="black"></div>
				<div className="container">
					<h1 className="logo cursive">
						eka prasetia
					</h1>
					<div className="content">
						<h4 className="motto">discovery JS channel</h4>
					</div>
				</div>
				<div className="footer">
					<div className="container">
						<Typed
								strings={textLines}
								typeSpeed={80}
								backSpeed={60}
								loop
						/>
					</div>
				</div>
			</div>
		</>
	)
}
