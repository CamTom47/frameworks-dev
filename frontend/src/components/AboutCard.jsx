import React, { Children } from "react";

const AboutCard = ({ title, text, icon }) => {
	return (
		<div className='flex flex-col justify-between items-center h-90 w-72 bg-white py-9 px-6 rounded-xl' style={{boxShadow: '0 0 10px 0 gray'}}>
			<h3 className='text-primary-dark text-2xl font-bold'>{title}</h3>
			<div className='bg-primary border border-secondary rounded-full p-2'>{icon}</div>
			<p className='text-center'>{text}</p>
		</div>
	);
};

export default AboutCard;
