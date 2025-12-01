import React, { useEffect, useState } from "react";

const ServiceScroller = ({ handleSelection, scrollPosition, scrolling }) => {
	const [initialLoad, setInitialLoad] = useState(true);

	const buttonSelectionObject = {
		0: "website-design",
		26: "web-development",
		51: "mobile-development",
		77: "cms-website-development",
		100: "app-redesign",
	};
	// console.log(buttonSelectionObject);

	const setActiveButton = (scrollPosition) => {
		const activeButton = document.querySelector(".active");
		if (buttonSelectionObject[scrollPosition]) {
			activeButton.classList.add("text-stone-400");
			activeButton.classList.remove("active");
			const buttonScrolledTo = document.getElementById(buttonSelectionObject[scrollPosition]);
			if (buttonScrolledTo) buttonScrolledTo.classList.add("active");
		}
	};

	// const setSliderPosition = () => {
	// 	//select the slider element
	// 	const slider = document.querySelector("#slider");

	// 	//let the initial node to be remove start at 0 index;
	// 	let nodeToRemove = 0;
	// 	//set the new node to be removed based on the list of nodes withing the slider classlist
	// 	for (let [node, idx] of slider.classList) if (node.startsWith("translate")) nodeToRemove = idx;

	// 	//remove the matching node
	// 	slider.classList.remove(`${slider.classList[nodeToRemove]}`);

	// 	//create an array of the buttonSelectionObject so that we can use the array's index;
	// 	let selectionArray = Object.keys(buttonSelectionObject);

	// 	console.log(selectionArray);
	// 	console.log(scrollPosition);
	// 	let currentIdx = selectionArray.indexOf(scrollPosition.toString());
	// 	console.log("currentidx", currentIdx);

	// 	if (currentIdx) {
	// 		slider.classList.add(`translate-y-${currentIdx * 12}`);
	// 	}
	// };

	// useEffect(() => {
	// 	setActiveButton(scrollPosition);
	// 	setSliderPosition();
	// }, [scrollPosition]);

	const handleClick = (e) => {
		// 	handleSelection();
		scrollToSection(e);
		if (initialLoad === true) {
			setInitialLoad(false);
		}
	};
	const scrollToSection = (e) => {
		const element = document.getElementById(e.target.id);
		document.getElementById(e.target.value).scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className='sticky top-14 w-screen bg-slate-950 outline-sky-400 outline z-20 py-1'>
			<ul className='flex w-full justify-around [&_button]:text-center [&_button]:text-md [&_button]:text-sky-500 [&_button]:hover:text-sky-300 [&_button]:focus:text-sky-200 [&_button]:focus:rounded-md [&_button]:focus:outline [&_button]:p-1 [&_button]:duration-500'>
				<button id='website-design-nav' className='text-sky-500' value='website-design' onClick={handleClick}>
					Website Design
				</button>
				<button id='web-dev-nav' value='web-app-development' onClick={handleClick}>
					Web Development
				</button>
				<button id='mobile-dev-nav' value='mobile-development' onClick={handleClick}>
					Mobile Development
				</button>
				<button id='app-redesign-nav' value='app-redesign' onClick={handleClick}>
					Application/Website Redesign
				</button>
				{/* <div id='slider' className='border-r-2 h-8 w-.5'></div> */}
			</ul>
		</div>
	);
};

export default ServiceScroller;
