import React from "react";
import { faker } from "@faker-js/faker";
interface ServicePageCardPrimaryProps {
	title: string;
	content: string;
	secondary: boolean;
}
const ServicePageCardPrimary = ({ title, content, secondary }: ServicePageCardPrimaryProps): React.JSX.Element => {
	return (
		<div className="flex flex-col w-full relative box-border">
			<h2 className='bg-primary-dark text-white font-bold text-2xl p-4 me-8 rounded-md h-36 w-full'>{title}</h2>
			<p className={`absolute bg-${secondary ? 'secondary text-white' : 'primary'} top-12 ms-8 p-4 rounded-md h-32 lg:text-sm w-full`}>{content}</p>
		</div>
	);
};

export default ServicePageCardPrimary;
