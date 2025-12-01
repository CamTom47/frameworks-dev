import React from "react";
import { faker } from "@faker-js/faker";
import "../styles/components/ServicePageCard.scss";
interface ServicePageCardProps {
	title: string;
	content: string;
	secondary: boolean;
}
const ServicePageCard = ({ title, content, secondary }: ServicePageCardProps): React.JSX.Element => {
	return (
		<div className={`servicepage-card ${secondary ? "blue" : ""} `}>
			<h2 className='title '>{title}</h2>
			<div className='service-page-border'></div>
			<p className='content'>{content}</p>
		</div>
	);
};

export default ServicePageCard;
