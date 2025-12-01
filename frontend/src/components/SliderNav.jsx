import React, { useEffect, useState } from "react";
import "../styles/components/SliderNav.scss";

const SliderNav = ({ navList }) => {
	//Initial Selection of the different navs
	const [navListTabs, setNavListTabs] = useState([]);
	const [activeSection, setActiveSection] = useState("planning");

	useEffect(() => {
		convertToId(navList);
	}, []);

	//array to be used to populate list navigator component

	const convertToId = (stringArray = []) => {
		const newArray = [];
		for (let string of stringArray) {
			const newObj = {};
			newObj.content = string;
			const newString = string.replace(/-/gm, " ").toLowerCase().split(" ").join("-");
			newObj.id = newString;
			newArray.push(newObj);
		}
		setNavListTabs(newArray);
	};

	const handleClick = (e) => {
		const elementId = e.target.id.split("-")[1];
		console.log(elementId);
		setActiveSection(elementId);
		e.preventDefault();
		console.log(document.getElementById(elementId));
	};

	let navComponents = navListTabs.map((nav, idx) => (
		<a
			className={`navcomponent ${activeSection === nav.id ? "active" : ""}`}
			href=''
			target={`#${nav.id}`}
			key={idx}
			id={`nav-${nav.id}`}
			onClick={handleClick}>
			{nav.content}
		</a>
	));

	return (
		<div id='slider-nav' className='navslider-container'>
			<div className='navcomponents'>{navComponents}</div>
		</div>
	);
};

export default SliderNav;
