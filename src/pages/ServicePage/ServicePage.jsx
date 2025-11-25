import { useState, useEffect } from "react";
import DropdownNav from "../../components/DropdownNav";
import ServicePageCard from "../../components/ServicePageCard";
import ButtonLink from "../../components/ButtonLink";
import "../../styles/servicePage.scss";

const Services = () => {
	// const services = {
	// 	"Website Development": "Website Development Content",
	// 	"Website Designing": "Website Designing Content",
	// 	"Website Redesigning": "Website Redesigning Content",
	// 	"CMS Website Development": "CMS Website Development Content",
	// 	"Web Application Development": "Web Application Development Content",
	// 	"Ongoing Maintenance": "Ongoing Maintenance Content",
	// 	"Site Hosting": "Site Hosting Content",
	// 	"SEO?": "SEO Content",
	// };

	const services = {
		"Web Design": ["E-Commerce", "Personal Website", "Porfolio", "Small Business", "Blog"],
		"Web Development": ["APIs", "Applications"],
		"Mobile Development": ["Applications"],
		"Web/App Redesign": ["Web Redesign", "Application Redesign"],
	};
	const [activeSection, setActiveSection] = useState("Website Development");
	const [sectionContent, setSectionContent] = useState(null);
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = (e) => {
		e.preventDefault();
		const { scrollHeight, scrollTop, clientHeight } = e.target;
		const position = Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100);
		setScrollPosition(position);
	};

	return (
		<div className='service-page-container'>
			<div className='background-white'>
				<div className='service-page-section'>
					<div tabIndex='4' id='website-design' className='service-page-section-header blue'>
						<h2>Web Design</h2>
						<p className='service-page-section-description'>
							A well designed website a person's first interaction with your company and should reflect what you bring
							to the table.
						</p>
					</div>
					<div className='service-page-grid blue'>
						<ServicePageCard
							title='E-Commerce'
							content='Attract clients with an intuitive E-commerce site that makes it easy for your customer to use and simple for you to manage.'
							secondary={true}
						/>
						<ServicePageCard title='Personal Website' content='Introduce yourself to the world with a site that embodies your personality.' secondary={true} />
						<ServicePageCard
							title='Portfolio'
							content='Showcase your experience with a porfolio site that compliments your style and work.'
							secondary={true}
						/>
						<ServicePageCard
							title='Small Business'
							content='Connect with your customer base on a new level by communicating your value through a concise and clear business site.'
							secondary={true}
						/>
						<ServicePageCard
							title='Blog'
							content='Share content with people in a manner that works for you through a user friendly and efficient blog.'
							secondary={true}
						/>
					</div>
				</div>
			</div>
			<div className='service-page-section'>
				<div tabIndex='4' id='web-app-development' className='service-page-section-header'>
					<h2>Web Development</h2>
					<p className='service-page-section-description'>
						A well designed website is often a person's first interaction with your company and should reflect what you
						bring to the table
					</p>
				</div>
				<div className='service-page-grid'>
					<ServicePageCard
						title='APIs'
						content='Create APIs to meet your needs or seemlessly integrate external APIs into your existing systems.'
					/>
					<ServicePageCard
						title='Custom Software'
						content='Develop custom software solutions that are tailor to your specifications.'
					/>
					<ServicePageCard
						title='Internal Business Tools'
						content="Design custom software tools that support your teams and eliminate the problems they're designed for."
					/>
				</div>
			</div>
			<div className='background-white'>
				<div className='service-page-section'>
					<div tabIndex='3' id='mobile-development' className='service-page-section-header blue'>
						<h2>Mobile Development</h2>
						<p className='service-page-section-description'>
							A well designed website is often a person's first interaction with your company and should reflect what
							you bring to the table
						</p>
					</div>
					<div className='service-page-grid'>
						<ServicePageCard title='iOS' content='Connect with your iOS audience with innovative and optimized mobile applications.' secondary={true} />
					</div>
				</div>
			</div>
			<div className='service-page-section'>
				<div tabIndex='2' id='app-redesign' className='service-page-section-header'>
					<h2>Redesign</h2>
					<p className='service-page-section-description'>
						A well designed website a person's first interaction with your company and should reflect what you bring to
						the table.
					</p>
				</div>
				<div className='service-page-grid'>
					<ServicePageCard title='Web Redesign' content='Reintroduce your presence with a new and improved website design.' />
					<ServicePageCard title='Application Redesign' content='Modify your existing application to meet your ever changing needs.' />
				</div>
			</div>
			<div className='additional-scope'>
				<p>
					Not seeing what you're looking for? We're always looking to grow our skills set. Please feel free to contact
					us to discuss.
				</p>
				<ButtonLink label='Contact Us' url='/contact' type='secondary' size='large' dark={true}></ButtonLink>
			</div>
		</div>
	);
};

export default Services;
