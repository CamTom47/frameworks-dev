import React, { act, useEffect, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const DropdownNav = ({ handleSelection, scrollPosition, scrolling, navList }) => {
	//Initial Selection of the different navs
	const [initialLoad, setInitialLoad] = useState(true);
	const [navListTabs, setNavListTabs] = useState([]);
	const [openDropdown, setOpenDropdown] = useState(null); //tracks which dropdown menu is currently being hovered over
	const [activeDropdown, setActiveDropdown] = useState(1); //tracks which dropdown item should be selected based on where a user is in the screen.
	const [listArray, setListArray] = useState([]);
	const [indicatorData, setIndicatorData] = useState({});

	useEffect(() => {
		convertToId(navList);
	}, []);

	useEffect(() => {
		updateListArray();
	}, []);

	const updateListArray = () => {
		const newArray = [];
		for (let item of Object.keys(navList)) {
			newArray.push(item);
		}
		setListArray(newArray);
	};

	//array to be used to populate list navigator component

	const convertToId = (listObject = {}) => {
		const newArray = [];
		for (let [key, value] of Object.entries(listObject)) {
			const newObj = {};
			let string = key;
			newObj.title = string;
			newObj.list = value;
			const newString = string.replace(/-/gm, " ").toLowerCase().split(" ").join("-");
			newObj.id = newString;
			newArray.push(newObj);
		}
		setNavListTabs(newArray);
	};

	// const handleClick = (e) => {
	// 	// 	handleSelection();
	// 	scrollToSection(e);
	// 	if (initialLoad === true) {
	// 		setInitialLoad(false);
	// 	}
	// };
	// const scrollToSection = (e) => {
	// 	const element = document.getElementById(e.target.id);
	// 	document.getElementById(e.target.value).scrollIntoView({ behavior: "smooth" });
	// };

	const showSectionOptions = (e) => {
		const dropDownObject = {};
		dropDownObject[e.target.innerText] = navList[e.target.innerText];
		setOpenDropdown(dropDownObject);
	};

	const closeDropdown = () => {
		setOpenDropdown(null);
	};
	const ref = useOutsideClick(closeDropdown);

	const handleContainerClick = (e) => {
		e.stopPropagation();
	};

	const handleHeaderClick = (e, index) => {
		const updatedIndicator = {};
		updatedIndicator.posX = e.target.offsetLeft;
		updatedIndicator.width = e.target.clientWidth;
		setIndicatorData(updatedIndicator);
		e.stopPropagation();
		e.preventDefault();
		showSectionOptions(e);
		setActiveDropdown(index);
	};

	let navComponents = navListTabs.map((nav, idx) => (
		<a href='' target='#' key={idx} id={nav.id} onClick={(e) => handleHeaderClick(e, idx)} className='z-2'>
			{nav.title}
		</a>
	));
	let navDropdowns;
	if (openDropdown) {
		navDropdowns = openDropdown[Object.keys(openDropdown)].map((item, idx) => (
			<a key={idx} ref={ref}>
				<span className='border-b pb-1 w-full border-b-blue-500'>{item}</span>
			</a>
		));
	}

	return (
		<div className='w-full relative rounded-lg py-1 bg-blue-900 shadow-md text-black self-center'>
			<div className='flex justify-around font-semibold text-white relative z-1'>
				<div
					style={{ width: `${indicatorData.width + 30}px`, left: `${indicatorData.posX - 15}px` }}
					className={`absolute bg-blue-500 h-full rounded-full duration-200`}></div>
				{navComponents}
			</div>
			{openDropdown && (
				<div
					className={`${
						openDropdown ? "h-fit" : "h-0"
					} rounded-md w-1/4 flex flex-col justify-around items-start gap-y-4 font-semibold text-white absolute p-4 top-10 shadow-xl bg-blue-900 inset-${listArray.indexOf(
						Object.keys(openDropdown)[0]
					)}/4 }
					`}
					onClick={handleContainerClick}>
					{navDropdowns}
				</div>
			)}
		</div>
	);
};

export default DropdownNav;
