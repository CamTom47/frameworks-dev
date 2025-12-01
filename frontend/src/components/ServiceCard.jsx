import ButtonLink from "./ButtonLink";
import "../styles/components/ServiceCard.scss";

const ServiceCard = ({ title, description, url, icon }) => {
	return (
		<div className='servicecard-container'>
				<h2 className='card-header'>{title}</h2>
				<div className="service-card-icon">{icon}</div>
			<p className='card-description'>{description}</p>
			<ButtonLink label={`${title} Services`} url={url} type='primary' dark={true}/>
		</div>
	);
};

export default ServiceCard;
