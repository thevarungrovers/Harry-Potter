import React from 'react'
import './Movies.css';

function MoviesList(props){
	return (
		<section className="movie">
			{/* trigger */}
			<button type="button" className="btn-modal" data-bs-toggle="modal" data-bs-target={`#${props.slug}`}>
				<img src={props.poster} alt="" />
			</button>

			{/* modal */}
			<div className="modal fade" id={props.slug} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
				<div className="modal-content">
				<div className="modal-header">
					<h1 className="modal-title fs-5" id="exampleModalLabel">
						{props.title}
						</h1>
					<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div className="modal-body">
					<p>{props.summary}</p>
					<div className="row">
						<div className="col">
							<h5>Box Office</h5>
							<h6>{props.box_office}</h6>
						</div>
						<div className="col">
							<h5>Release Date</h5>
							<h6>{props.release_date}</h6>
						</div>
						<div className="col">
							<h5>Budget</h5>
							<h6>{props.budget}</h6>
						</div>
					</div>
				</div>
				<div className="modal-footer modals-btns">
					<button type="button" className="btn btn-outline-primary"><a href={props.trailer} target="_blank">Watch Trailer</a></button>
					<button type="button" className="btn btn-primary"><a href={props.wiki} target="_blank">View on Wiki</a></button>
				</div>
				</div>
			</div>
			</div>
		</section>
	)
}

export default MoviesList

