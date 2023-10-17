import React from 'react'
import './Potions.css';

function PotionsList(props){
	return (
		<section className="potion border">
			<section className="potion-image-container">
				{/* yes */}
				<img src={props.image} className="card-img-top p-2 img-fluid img-responsive book-cover" alt={props.name} style={{display : !props.image && "none"}} />
				{/* no */}
				<img src="https://i.ibb.co/smYXpPf/not.png" className="card-img-top p-2 img-fluid img-responsive book-cover" alt={props.name} style={{display : props.image && "none"}} />
			</section>
			<section className="potion-details-container">
				<p className="potion-title fw-bold">
					{props.name}
				</p>

				<section className="potion-details text-start">
					{/* difficulty */}
					<p className="potion-difficulty">
						<span className="detail-title">
							Difficulty:
						</span>
						<span className="detail-value">
							{/* yes */}
							<span style={{display : !props.difficulty && "none"}}>{props.difficulty}</span>
							{/* no */}
							<span style={{display : props.difficulty && "none"}}>N/A</span>
						</span>
					</p>

					{/* ingredients */}
					<p className="potion-ingredients">
						<span className="detail-title">
							Ingredients:
						</span>
						<span className="detail-value">
							{/* yes */}
							<span style={{display : !props.ingredients && "none"}}>{props.ingredients}</span>
							{/* no */}
							<span style={{display : props.ingredients && "none"}}>N/A</span>
						</span>
					</p>

					{/* side effects */}
					<p className="potion-side-effects">
						<span className="detail-title">
							Side Effects:
						</span>
						<span className="detail-value">
							{/* yes */}
							<span style={{display : !props.side_effects && "none"}}>{props.side_effects}</span>
							{/* no */}
							<span style={{display : props.side_effects && "none"}}>No Side Effects</span>
						</span>
					</p>

					{/* effect */}
					<p className="potion-effect">
						<span className="detail-title">
						Potion effect:
						</span>
						<span className="detail-value">
							{/* yes */}
							<span style={{display : !props.effect && "none"}}>{props.effect}</span>
							{/* no */}
							<span style={{display : props.effect && "none"}}>N/A</span>
						</span>
					</p>

					{/* characterstics */}
					<p className="potion-characterstics">
						<span className="detail-title">
						Characteristics:
						</span>
						<span className="detail-value">
							{/* yes */}
							<span style={{display : !props.characteristics && "none"}}>{props.characteristics}</span>
							{/* no */}
							<span style={{display : props.characteristics && "none"}}>N/A</span>
						</span>
					</p>
				</section>

				<a href={props.wiki} className="btn btn-primary" target="_blank">View on Wiki</a>
			</section>
		</section>
	)
}

export default PotionsList

