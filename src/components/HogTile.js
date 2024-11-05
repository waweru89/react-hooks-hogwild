import React, { useState } from "react";

function HogTile({ hog, onHide }) {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div className="ui card" onClick={() => setShowDetails(!showDetails)}>
			<div className="image">
				<img src={hog.image} alt={hog.name} />
			</div>
			<div className="content">
				<h3 className="header">{hog.name}</h3>
				{showDetails && (
					<div className="description">
						<p>Specialty: {hog.specialty}</p>
						<p>Weight: {hog.weight}</p>
						<p>Greased: {hog.greased ? "Yes" : "No"}</p>
						<p>Highest Medal: {hog["highest medal achieved"]}</p>
						<button onClick={() => onHide(hog.name)}>Hide</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default HogTile;
