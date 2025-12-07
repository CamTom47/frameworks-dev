import AboutSection from "./About/AboutSection";
import ServiceSection from "./Services/ServiceSection";
import Footer from "../Footer/Footer";

import "./Homepage.scss";

const Homepage = () => {
	return (
		<div className='homepage-container h-svh w-screen overflow-y-scroll'>
				<AboutSection></AboutSection>
				<ServiceSection></ServiceSection>
				<Footer></Footer>
		</div>
	);
};

export default Homepage;
