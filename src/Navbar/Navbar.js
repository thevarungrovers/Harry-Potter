import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
	return (
		<div class="container">
			<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
				<Link to="/" style={{ textDecoration: 'none' }} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis">
				Harry Potter
				</Link>

				<ul class="nav nav-pills">
					<li class="nav-item">
						<Link to="/" style={{ textDecoration: 'none', color: '#000000'}} className="nav-link">
							Home
						</Link>
					</li>
					<li class="nav-item">
						<Link to="/potions" style={{ textDecoration: 'none', color: '#000000' }} className="nav-link">
							Potions
						</Link>
					</li>
					<li class="nav-item">
						<Link to="/characters" style={{ textDecoration: 'none', color: '#000000' }} className="nav-link">
							Characters
						</Link>
					</li>
					<li class="nav-item">
						<Link to="/books" style={{ textDecoration: 'none', color: '#000000' }} className="nav-link">
							Books
						</Link>
					</li>
				</ul>
			</header>
		</div>
	)
}
