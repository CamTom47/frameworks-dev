import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Navbar from "../src/components/Navbar";
import Footer from "./pages/Footer/Footer";
import ServicePage from "./pages/ServicePage/ServicePage";
import Contact from "./pages/Contact/Contact";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
	return (
		<div className='main-app'>
			<Navbar></Navbar>
			{/* <div className="overflow-y-scroll "> */}
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/services' element={<ServicePage />} />
					<Route path='/services/:service_id' element={<ServicePage />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			{/* </div> */}
		</div>
	);
}

export default App;
