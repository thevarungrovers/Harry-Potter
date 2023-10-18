import React, {useState, useEffect} from "react";
import CharactersList from './CharactersList.js';
import './Characters.css';

function Characters() {
    const [characters, setCharacters] = useState([]);

	const fetchCharacters = () =>{
		fetch('https://hp-api.onrender.com/api/characters')
		.then((response) => response.json())
		.then(data => setCharacters(data));
	}

	useEffect(() => {
		fetchCharacters()
	}, []);

	return (
		<div className="text-center" id="characters">
			<h2 className="characters-heading">List of Characters</h2>
			<div className="table-responsive">
				<table className="table table-hover">
					<thead>
						<tr className="border-bottom">
							<th scope="col">Image</th>
							<th scope="col">Name</th>
							<th scope="col">Date of Birth</th>
							<th scope="col">Gender</th>
							<th scope="col">Species</th>
							<th scope="col">Ancestry</th>
							<th scope="col">Eye Colour</th>
							<th scope="col">Hair Colour</th>
							<th scope="col">Patronus</th>
							<th scope="col">Wand Details</th>
						</tr>
					</thead>
					<tbody>
						{characters.map((character) => 
							<CharactersList
								name = {character.name}
								species = {character.species}
								gender = {character.gender}
								house = {character.house}
								dateOfBirth = {character.dateOfBirth}
								ancestry = {character.ancestry}
								eyeColour = {character.eyeColour}
								hairColour = {character.hairColour}
								patronus = {character.patronus}
								image = {character.image}
								wandWood = {character.wand.wood}
								wandCore = {character.wand.core}
								wandLength = {character.wand.length}
								/>
						)}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Characters;
