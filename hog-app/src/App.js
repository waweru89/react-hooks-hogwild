import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import hogs from "../porkers_data";
import HogForm from "./HogForm";

function App() {
	const [hogData, setHogData] = useState(hogs);
	const [showGreased, setShowGreased] = useState(false);
	const [sortBy, setSortBy] = useState("name");

	const handleAddHog = (newHog) => setHogData([...hogData, newHog]);

	const handleHideHog = (name) => setHogData(hogData.filter(hog => hog.name !== name));

	const filteredHogs = hogData.filter(hog => (showGreased ? hog.greased : true));
	const sortedHogs = [...filteredHogs].sort((a, b) => 
		sortBy === "name" ? a.name.localeCompare(b.name) : a.weight - b.weight
	);

	return (
		<div className="App">
			<Nav />
			<div className="filters">
				<button onClick={() => setShowGreased(!showGreased)}>
					{showGreased ? "Show All Hogs" : "Show Greased Hogs"}
				</button>
				<select onChange={(e) => setSortBy(e.target.value)}>
					<option value="name">Sort by Name</option>
					<option value="weight">Sort by Weight</option>
				</select>
			</div>
			<div className="hog-list ui grid container">
				{sortedHogs.map((hog) => (
					<HogTile key={hog.name} hog={hog} onHide={handleHideHog} />
				))}
			</div>
			<HogForm onAddHog={handleAddHog} />
		</div>
	);
}

export default App;
