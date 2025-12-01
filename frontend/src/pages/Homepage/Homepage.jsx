import AboutSection from "./About/AboutSection";
import ServiceSection from "./Services/ServiceSection";

import '../../styles/homepage.scss';

const Homepage = () => {
	
	return (
		<div className='homepage-container'>
			<AboutSection></AboutSection>
			<ServiceSection></ServiceSection>
		</div>
	);
};

export default Homepage;
