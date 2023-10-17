import React from 'react'
import './Books.css';

function BooksList(props){
	return (
		<div className="card card-style">
			<img src={props.cover} className="card-img-top p-2 img-fluid img-responsive book-cover" alt={props.title} />
			<div className="card-body">
				<h4 className="card-title fw-bold">{props.title}</h4>
				<p className="card-text fst-italic book-details-container">
					<h6 className="book-author">{props.author}</h6>
					<p className="book-summary  card-text">{props.summary}</p>
					<section className="book-details">
						<p className="book-pages">No of Pages : <br/>{props.pages}</p>
						<p className="book-release-date">Release Date : <br/> {props.release_date}</p>
					</section>
				</p>
				<a href={props.wiki} className="btn btn-primary" target="_blank">View on Wiki</a>
			</div>
		</div>
	)
}

export default BooksList

