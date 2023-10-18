import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<div className="container">
			<footer className="py-3 my-4">
				<ul className="nav justify-content-center border-bottom pb-3 mb-3">
					<li className="nav-item">
						<Link to="/" className="nav-link px-2 text-body-secondary">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/potions" className="nav-link px-2 text-body-secondary">
							Potions
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/characters" className="nav-link px-2 text-body-secondary">
							Characters
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/books" className="nav-link px-2 text-body-secondary">
							Books
						</Link>
					</li>
				</ul>
				<p className="text-center text-body-secondary">Varun Grover</p>
			</footer>
		</div>
	)
}
