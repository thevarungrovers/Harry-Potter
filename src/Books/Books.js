import React, {useState, useEffect} from "react";
import BooksList from './BooksList.js';
import './Books.css';

function Books() {
    const [books, setBooks] = useState([]);

	const fetchBooks = () =>{
		fetch('https://api.potterdb.com/v1/books')
		.then((response) => response.json())
		.then(data => setBooks(data.data));
	}

	useEffect(() => {
		fetchBooks()
	}, []);

		return (
			<div className="border-top" id="books">
				<h2 className="text-center books-hrading border-bottom">List of Books</h2>
				<section class="text-center card-container">
					{books.map((book) => 
						<BooksList
							key = {book.id}
							title = {book.attributes.title}
							author = {book.attributes.author}
							cover = {book.attributes.cover}
							pages = {book.attributes.pages}
							release_date = {book.attributes.release_date}
							summary = {book.attributes.summary}
							wiki = {book.attributes.wiki}
							/>
						)}
				</section>
			</div>
		)
}

export default Books;
