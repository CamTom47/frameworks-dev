import AboutSection from "./About/AboutSection";
import ServiceSection from "./Services/ServiceSection";
import Footer from "../Footer/Footer";

import './Homepage.scss'

const Homepage = () => {
	return (
		<div className='homepage-container h-fit w-screen'>
			<div className='overflow-y-scroll h-fit w-screen '>
				<AboutSection></AboutSection>
				<ServiceSection></ServiceSection>
								<Footer></Footer>

			</div>
		</div>
	);
};

export default Homepage;
