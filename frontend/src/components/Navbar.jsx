import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import "../styles/components/Navbar.scss";

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

		<div className={`navbar-container`}>
			<div className='navbar-content'>
				<Link reloadDocument scrollrestoration='true' className='navbar-title' to='/'>
					<h2>Elaborate</h2>
				</Link>
				<div className='navbar-link-container'>
					<Link
						reloadDocument
						scrollrestoration='true'
						className={`navbar-link ${activeNav === "about" ? "active" : ""}`}
						to='/about'>
						About
					</Link>
					<Link
						reloadDocument
						scrollrestoration='true'
						className={`navbar-link ${activeNav === "services" ? "active" : ""}`}
						to='/services'>
						Services
					</Link>
					{/* <Link to='/portfolio'>Case Studies</Link> */}
					<Link
						reloadDocument
						scrollrestoration='true'
						className={`navbar-link ${activeNav === "contact" ? "active" : ""}`}
						to='/contact'>
						Contact
					</Link>
				</div>
			</div>
			{/* <ButtonLink label='Get Quote' url='/contact' type='primary'></ButtonLink> */}
		</div>
	);
};

export default Navbar;
