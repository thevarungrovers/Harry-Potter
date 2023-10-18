import React from 'react'
import './Characters.css';

function CharactersList(props){
	return (
		// <section className="character">
			<tr className="character border-bottom">
				<td>
					{/* yes */}
					<img src={props.image} alt={props.name} className="img-fluid img-responsive" style={{display : !props.image && "none"}} />
					{/* no */}
					<img src="https://i.ibb.co/smYXpPf/not.png" className="img-fluid img-responsive" alt={props.name} style={{display : props.image && "none"}} />
				</td>
				<td>
					{props.name}
				</td>
				<td>
					{/* yes */}
					<span style={{display : !props.dateOfBirth && "none"}}>{props.dateOfBirth}</span>
					{/* no */}
					<span style={{display : props.dateOfBirth && "none"}}>N/A</span>
				</td>
				<td>
					{/* yes */}
					<span style={{display : !props.gender && "none"}}>{props.gender}</span>
					{/* no */}
					<span style={{display : props.gender && "none"}}>N/A</span>
				</td>
				<td>
					{/* yes */}
					<span style={{display : !props.species && "none"}}>{props.species}</span>
					{/* no */}
					<span style={{display : props.species && "none"}}>N/A</span>
				</td>
				<td>
					{/* yes */}
					<span style={{display : !props.ancestry && "none"}}>{props.ancestry}</span>
					{/* no */}
					<span style={{display : props.ancestry && "none"}}>N/A</span>
				</td>
				<td>
					{/* yes */}
					<span style={{display : !props.eyeColour && "none"}}>{props.eyeColour}</span>
					{/* no */}
					<span style={{display : props.eyeColour && "none"}}>N/A</span>
				</td>
				<td>
					{/* yes */}
					<span style={{display : !props.hairColour && "none"}}>{props.hairColour}</span>
					{/* no */}
					<span style={{display : props.hairColour && "none"}}>N/A</span>
				</td>
				<td>
					{/* yes */}
					<span style={{display : !props.patronus && "none"}}>{props.patronus}</span>
					{/* no */}
					<span style={{display : props.patronus && "none"}}>N/A</span>
				</td>
				<td className="text-start">
					{/* all - yes */}
					<p style={{display : (!props.wandWood && !props.wandCore && !props.wandLength) && "none"}}>
						<p>
							<span className="wand-title">Wood -&nbsp;</span>
							{/* yes */}
							<span style={{display : !props.wandWood && "none"}}>{props.wandWood}</span>
							{/* no */}
							<span style={{display : props.wandWood && "none"}}>N/A</span>
						</p>
						<p>
						<span className="wand-title">Core -&nbsp;</span>
							{/* yes */}
							<span style={{display : !props.wandCore && "none"}}>{props.wandCore}</span>
							{/* no */}
							<span style={{display : props.wandCore && "none"}}>N/A</span>
						</p>
						<p>
						<span className="wand-title">Length -&nbsp;</span>
							{/* yes */}
							<span style={{display : !props.wandLength && "none"}}>{props.wandLength}</span>
							{/* no */}
							<span style={{display : props.wandLength && "none"}}>N/A</span>
						</p>
					</p>
					{/* all - no */}
					<p style={{display : !(!props.wandWood && !props.wandCore && !props.wandLength) && "none"}}>
						N/A
					</p>
					
				</td>
			</tr>
	)
}

export default CharactersList

