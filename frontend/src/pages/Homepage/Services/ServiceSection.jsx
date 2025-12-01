import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import ServiceScroller from "../../ServicePage/ServiceScroller";
import ServiceCard from "../../../components/ServiceCard";

const ServiceSection = () => {
	const svgObject = {
		webDesign: (
			<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'>
				<g fill='none' stroke='currentColor' strokeWidth='1.5'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10'
					/>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M13 2.05S16 6 16 12m-5 9.95S8 18 8 12s3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74'
					/>
					<path
						d='M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525z'
						clipRule='evenodd'
					/>
				</g>
			</svg>
		),
		webDev: (
			<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'>
				<g fill='none' stroke='currentColor' strokeWidth='1.5'>
					<path strokeLinecap='round' strokeLinejoin='round' d='M2 21h15m4 0h1' />
					<path d='M2 16.4V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z' />
				</g>
			</svg>
		),
		mobileDev: (
			<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'>
				<g fill='none' stroke='currentColor' strokeWidth='1.5'>
					<path strokeLinecap='round' strokeLinejoin='round' d='m12 16.01l.01-.011' />
					<path d='M7 19.4V4.6a.6.6 0 0 1 .6-.6h8.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6Z' />
				</g>
			</svg>
		),
		redesign: (
			<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'>
				<g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5'>
					<path d='m17.674 11.408l-1.905 5.715a.6.6 0 0 1-.398.386L3.693 20.98a.6.6 0 0 1-.74-.765L6.745 8.841a.6.6 0 0 1 .34-.365l5.387-2.218a.6.6 0 0 1 .653.13l4.404 4.406a.6.6 0 0 1 .145.614M3.296 20.602l6.364-6.364' />
					<path d='m17.792 11.056l2.828-2.829a2 2 0 0 0 0-2.828L18.5 3.277a2 2 0 0 0-2.829 0l-2.828 2.829m-1.062 6.01a1.5 1.5 0 1 0-2.121 2.122a1.5 1.5 0 0 0 2.121-2.122' />
				</g>
			</svg>
		),
	};
	return (
		<div className='service-section'>
			<div className='header-container'>
				<h1>Flexible and Intuitive Software Solutions</h1>
			</div>
			<div className='service-grid'>
				<ServiceCard
					title={"Web Design"}
					description={"Design beautiful websites optimized to gain you maximum exposure and communicate your brand."}
					url='/services/website-design-nav'
					icon={svgObject.webDesign}></ServiceCard>
				<ServiceCard
					title={"Web Development"}
					description={
						"Build robust applications and tools to meet your needs using Front-end, Back-end, and Full-Stack toolsets."
					}
					url='/services/web-dev-nav'
					icon={svgObject.webDev}></ServiceCard>
				<ServiceCard
					title={"Mobile Development"}
					description={
						"Meet your customers where they are. Create custom mobile applications compatible with iOS and Android."
					}
					url='/services/mobile-dev-nav'
					icon={svgObject.mobileDev}></ServiceCard>
				<ServiceCard
					title={"Redesign"}
					description={"Update your existing Website or Application to your current needs."}
					url='/services/app-redesign-nav'
					icon={svgObject.redesign}></ServiceCard>
			</div>
		</div>
	);
};

export default ServiceSection;
