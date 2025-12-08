import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";

const Navbar = () => {
	const [navbarHidden, setNavbarHidden] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.outerWidth);
	const [lastScrollStop, setLastScrollStop] = useState(window.screenTop);
	const [activeNav, setActiveNav] = useState("");
	const [showHambuger, setShowHamburger] = useState(screenWidth <= 430);
	const [showNav, setShowNav] = useState(false);


	const getWindowHeight = () => {
		if (lastScrollStop < window.scrollY) setNavbarHidden(true);
		else setNavbarHidden(false);
		setLastScrollStop(window.scrollY);
	};

	window.addEventListener("scroll", getWindowHeight);

	useEffect(() => {
		console.log(window.location.href)
		const pathname = window.location.pathname.split("/")[1]
		setActiveNav(pathname ? pathname : '');
	}, [window.location.pathname]);

	//Get the window width from the window object
	const getWindowWidth = () => {
		setScreenWidth(window.outerWidth);
	};

	//call the getWindowWidth function when a user resizes their computer screen.
	window.addEventListener("resize", getWindowWidth);

	//When the windowWidth state changes, check to see if the hamburgerMenu should show.
	useEffect(() => {
		setHamburgerVisibility();
	}, [screenWidth]);

	// Change the visibility of the hambuger menu based on the screen width.
	const setHamburgerVisibility = () => {
		if (screenWidth <= 430){
			showHambuger ? '' : setShowHamburger(true);
		}
		else setShowHamburger(false);
	};

	return (
		<div className='sticky top-0 flex  bg-white z-999  justify-between items-center py-6 px-9 shadow-lg h-18'>
			<Link reloadDocument scrollrestoration='true' to='/'>
				<h2>Frameworks Development</h2>
			</Link>

			{showHambuger ? (
				<div className='flex flex-col justify-between h-6' onClick={() => setShowNav(!showNav)}>
					<div className='w-7 h-1 bg-primary-dark rounded-full '></div>
					<div className='w-7 h-1 bg-primary-dark rounded-full '></div>
					<div className='w-7 h-1 bg-primary-dark rounded-full '></div>
				</div>
			) : (

				//NORMAL LINKS
				<div className='flex gap-x-10  text-sm **:hover:border-b duration-100'>
					<Link
						className={activeNav === "about" ? "text-primary" : ""}
						reloadDocument
						scrollrestoration='true'
						to='/about'>
						About
					</Link>
					<Link
						className={activeNav === "services" ? "text-primary" : ""}
						reloadDocument
						scrollrestoration='true'
						to='/services'>
						Services
					</Link>
					{/* <Link to='/portfolio'>Case Studies</Link> */}
					<Link
						className={activeNav === "contact" ? "text-primary" : ""}
						reloadDocument
						scrollrestoration='true'
						to='/contact'>
						Contact
					</Link>
				</div>
			)}
			{showNav ? (

				//HAMBURGER ACTIVE LINKS
				<div className='absolute top-18 left-0 flex flex-col items-center  bg-white w-screen h-fit border-t **:text-xl **:border-b **:w-screen **:text-center **:py-2 animate-opennav origin-top'>
					<Link reloadDocument scrollrestoration='true' to='/about'>
						About
					</Link>
					<Link reloadDocument scrollrestoration='true' to='/services'>
						Services
					</Link>
					{/* <Link to='/portfolio'>Case Studies</Link> */}
					<Link reloadDocument scrollrestoration='true' to='/contact'>
						Contact
					</Link>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Navbar;
