import React, {useState, useEffect} from "react";
import PotionsList from './PotionsList.js';
import './Potions.css';

function Potions() {
    const [potions, setPotions] = useState([]);

	const fetchPotions = () =>{
		fetch('https://api.potterdb.com/v1/potions')
		.then((response) => response.json())
		.then(data => setPotions(data.data));
	}

	useEffect(() => {
		fetchPotions()
	}, []);

		return (
			<div className="border-top" id="potions">
				<h2 className="text-center border-bottom potions-heading">List Of Potions</h2>
				<section class="text-center card-container">
					{potions.map((potion) => 
						<PotionsList
							difficulty = {potion.attributes.difficulty}
                            image = {potion.attributes.image}
                            ingredients = {potion.attributes.ingredients}
                            name = {potion.attributes.name}
                            wiki = {potion.attributes.wiki}
                            side_effects = {potion.attributes.side_effects}
                            effect = {potion.attributes.effect}
                            characteristics = {potion.attributes.characteristics}
							/>
						)}
				</section>
			</div>
		)
}

export default Potions;
