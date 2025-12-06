import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";

const Navbar = () => {
	// const [navbarHidden, setNavbarHidden] = useState(false);
	const [lastScrollStop, setLastScrollStop] = useState(window.screenTop);
	const [activeNav, setActiveNav] = useState("about");

	const getWindowHeight = () => {
		// if (lastScrollStop < window.scrollY) setNavbarHidden(true);
		// else setNavbarHidden(false);
		setLastScrollStop(window.scrollY);
	};
	window.addEventListener("scroll", getWindowHeight);
	useEffect(() => {
		setActiveNav(window.location.pathname.split("/")[1]);
	}, [window.location.pathname]);

	return (
		// <div className={`navbar-container ${navbarHidden ? "hidden" : ""}`}> use to make navbar hide on scroll

		<div className='sticky top-0 bg-white z-999 flex justify-between items-baseline py-6 px-9 shadow-lg'>
			<Link reloadDocument scrollrestoration='true' to='/'>
				<h2>Frameworks Development</h2>
			</Link>
			<div className='flex gap-x-10 *:hover:text-primary text-lg'>
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
			{/* <ButtonLink label='Get Quote' url='/contact' type='primary'></ButtonLink> */}
		</div>
	);
};

export default Navbar;
