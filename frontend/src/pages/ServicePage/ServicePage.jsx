import { useState, useEffect } from "react";
import DropdownNav from "../../components/DropdownNav";
import ServicePageCardPrimary from "../../components/ServicePageCardPrimary";
import ButtonLink from "../../components/ButtonLink";
import Footer from "../Footer/Footer";

import './ServicePage.scss'

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
		<div className='service-page-container flex flex-col h-screen w-full gap-y-60 items-center overflow-y-scroll'>
			<div className='bg-primary-dark font-bold pt-8 pb-8 text-center w-full'>
				<h1 className='text-white text-5xl'>Services</h1>
			</div>
			<div className='flex flex-col gap-y-12 mx-4 lg:mx-120'>
				<div tabIndex='4' id='website-design' className='flex flex-col gap-y-4'>
					<h2 className='text-center text-primary-dark font-bold text-3xl'>Web Design</h2>
					<p className='w-fit text-center text-xl leading-10 '>
						A well designed website a person's first interaction with your company and should reflect what you bring to
						the table.
					</p>
				</div>
				<div className='flex flex-col gap-y-24 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16'>
					<ServicePageCardPrimary
						title='E-Commerce'
						content='Attract clients with an intuitive E-commerce site that makes it easy for your customer to use and simple for you to manage.'
						secondary={true}
					/>
					<ServicePageCardPrimary
						title='Personal Website'
						content='Introduce yourself to the world with a site that embodies your personality.'
						secondary={true}
					/>
					<ServicePageCardPrimary
						title='Portfolio'
						content='Showcase your experience with a porfolio site that compliments your style and work.'
						secondary={true}
					/>
					<ServicePageCardPrimary
						title='Small Business'
						content='Connect with your customer base on a new level by communicating your value through a concise and clear business site.'
						secondary={true}
					/>
					<ServicePageCardPrimary
						title='Blog'
						content='Share content with people in a manner that works for you through a user friendly and efficient blog.'
						secondary={true}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-y-12 mx-4 lg:mx-120'>
				<div tabIndex='4' id='web-app-development' className='flex flex-col gap-y-4'>
					<h2 className='text-center text-primary-dark font-bold text-3xl'>Web Development</h2>
					<p className='w-fit text-center text-xl leading-10 '>
						A well designed website is often a person's first interaction with your company and should reflect what you
						bring to the table
					</p>
				</div>
				<div className='flex flex-col gap-y-24 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16'>
					<ServicePageCardPrimary
						title='APIs'
						content='Create APIs to meet your needs or seemlessly integrate external APIs into your existing systems.'
					/>
					<ServicePageCardPrimary
						title='Custom Software'
						content='Develop custom software solutions that are tailor to your specifications.'
					/>
					<ServicePageCardPrimary
						title='Internal Business Tools'
						content="Design custom software tools that support your teams and eliminate the problems they're designed for."
					/>
				</div>
			</div>
			<div className='background-white'>
				<div className='flex flex-col gap-y-12 mx-4 lg:mx-120'>
					<div tabIndex='3' id='mobile-development' className='flex flex-col gap-y-4'>
						<h2 className='text-center text-primary-dark font-bold text-3xl'>Mobile Development</h2>
						<p className='w-fit text-center text-xl leading-10 '>
							A well designed website is often a person's first interaction with your company and should reflect what
							you bring to the table
						</p>
					</div>
					<div className='flex flex-col gap-y-24 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16'>
						<ServicePageCardPrimary
							title='iOS'
							content='Connect to your iOS audience through innovative and optimized mobile applications.'
							secondary={true}
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-y-12 mx-4 lg:mx-120'>
				<div tabIndex='2' id='app-redesign' className='flex flex-col gap-y-4'>
					<h2 className='text-center text-primary-dark font-bold text-3xl'>Redesign</h2>
					<p className='w-fit text-center text-xl leading-10 '>
						A well designed website a person's first interaction with your company and should reflect what you bring to
						the table.
					</p>
				</div>
				<div className='flex flex-col gap-y-24 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16'>
					<ServicePageCardPrimary
						title='Web Redesign'
						content='Reintroduce your presence with a new and improved website design.'
					/>
					<ServicePageCardPrimary
						title='Application Redesign'
						content='Modify your existing application to meet your ever changing needs.'
					/>
				</div>
			</div>
			<div className='px-4 flex flex-col text-center pb-32 gap-y-4 items-center'>
				<p>
					Not seeing what you're looking for? We're always looking to grow our skills set. Please feel free to contact
					us to discuss.
				</p>
				<ButtonLink label='Contact Us' url='/contact' type='secondary' size='large' dark={true}></ButtonLink>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Services;
