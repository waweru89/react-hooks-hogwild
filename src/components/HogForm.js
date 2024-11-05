import React, { useState } from "react";

function HogForm({ onAddHog }) {
	const [formData, setFormData] = useState({
		name: "",
		specialty: "",
		greased: false,
		weight: "",
		"highest medal achieved": "",
		image: "",
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddHog(formData);
		setFormData({
			name: "",
			specialty: "",
			greased: false,
			weight: "",
			"highest medal achieved": "",
			image: "",
		});
	};

	return (
		<form onSubmit={handleSubmit} className="hog-form">
			<input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
			<input type="text" name="specialty" value={formData.specialty} onChange={handleChange} placeholder="Specialty" required />
			<input type="text" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" required />
			<input type="text" name="highest medal achieved" value={formData["highest medal achieved"]} onChange={handleChange} placeholder="Medal" required />
			<input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
			<label>
				Greased:
				<input type="checkbox" name="greased" checkimport React, { useState } from "react";

function HogForm({ onAddHog }) {
	const [formData, setFormData] = useState({
		name: "",
		specialty: "",
		greased: false,
		weight: "",
		"highest medal achieved": "",
		image: "",
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddHog(formData);
		setFormData({
			name: "",
			specialty: "",
			greased: false,
			weight: "",
			"highest medal achieved": "",
			image: "",
		});
	};

	return (
		<form onSubmit={handleSubmit} className="hog-form">
			<input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
			<input type="text" name="specialty" value={formData.specialty} onChange={handleChange} placeholder="Specialty" required />
			<input type="text" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" required />
			<input type="text" name="highest medal achieved" value={formData["highest medal achieved"]} onChange={handleChange} placeholder="Medal" required />
			<input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
			<label>
				Greased:
				<input type="checkbox" name="greased" checked={formData.greased} onChange={handleChange} />
			</label>
			<button type="submit">Add Hog</button>
		</form>
	);
}

export default HogForm;
ed={formData.greased} onChange={handleChange} />
			</label>
			<button type="submit">Add Hog</button>
		</form>
	);
}

export default HogForm;
