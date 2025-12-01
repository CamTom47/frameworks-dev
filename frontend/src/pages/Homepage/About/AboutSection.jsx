import ButtonLink from "../../../components/ButtonLink";
import homepagePhoto from '../../../assets/photos/ales-nesetril-Im7lZjxeLhg-unsplash.jpg'

const AboutSection = () => {
	return (
		<div className='about-section'>
			<div className='about-section-content'>
				<div>
					<h1>Software Development</h1>
					<h2>Custom Solutions To Your Unique Problems</h2>
				</div>
				<p>
					We develop with a customer centric focus. Our number one goal is to ensure your needs are met at all phases
					of the project to successfully deliver the product that you envision.
				</p>
				<div className='button-container'>
					<ButtonLink label='Learn More' url='/about' size='large' type='primary' dark={true} />
					<ButtonLink label='Get In Contact' url='/about' size='large' type='primary' dark={true} />
				</div>
			</div>
			<div>
				<img src={homepagePhoto} alt='' />
			</div>
		</div>
	);
};

export default AboutSection;
