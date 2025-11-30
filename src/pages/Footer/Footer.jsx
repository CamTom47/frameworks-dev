import { Link } from "react-router";
import "../../styles/components/Footer.scss";

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='footer-content'>
				<div className='contact-information'>
					<p>hello@frameworksdev.com</p>
					<img className='footer-image' src='src/assets/linkedIn/in-logo/InBug-White.png' />
				</div>
				<div className='company-info'>
					<p className='font-semibold text-xl'>Frameworks Development, LLC</p>
					<p className='font-semibold text-xl'>Est. 2025</p>
				</div>
				<div className='link-container'>
					<Link className='footer-link' reloadDocument scrollrestoration='true' to='/about'>
						About
					</Link>
					<Link className='footer-link' reloadDocument scrollrestoration='true' to='/services'>
						Services
					</Link>
					<Link className='footer-link' reloadDocument scrollrestoration='true' to='/contact'>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
