import React, {useState, useEffect} from "react";
import MoviesList from './MoviesList.js';
import './Movies.css';

function Movies() {
    const [movies, setMovies] = useState([]);

	const fetchMovies = () =>{
		fetch('https://api.potterdb.com/v1/movies')
		.then((response) => response.json())
		.then(data => setMovies(data.data));
	}

	useEffect(() => {
		fetchMovies()
	}, []);

		return (
			<div className="border-top" id="movies">
				<h2 className="text-center ">Movies</h2>
				<div className="alert alert-light text-center" role="alert">
					click on posters to view more info
				</div>
				<section className="movies-container" id="">
						{movies.map((movie) => 
							<MoviesList
								slug = {movie.attributes.slug}
								poster = {movie.attributes.poster}
								title = {movie.attributes.title}
								box_office = {movie.attributes.box_office}
								budget = {movie.attributes.budget}
								release_date = {movie.attributes.release_date}
								summary = {movie.attributes.summary}
								trailer = {movie.attributes.trailer}
								wiki = {movie.attributes.wiki}
								/>
						)}
				</section>
			</div>
		)
}

export default Movies;
