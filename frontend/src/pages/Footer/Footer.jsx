import { Link } from "react-router";
import linkedInLogo from "../../assets/linkedIn/in-logo/InBug-White.png";

const Footer = () => {
	return (
		<div className='flex justify-between bg-primary-dark *:text-white py-12 px-9' >
			<div className='flex flex-col justify-end'>
				<p>hello@frameworksdev.com</p>
				<p className=''>Frameworks Development, LLC</p>
				<p className=''>Est. 2025</p>
				<a href='linkedin.com/company/frameworks-development' className='' src={linkedInLogo} />
			</div>
			<div className='flex flex-col justify-between items-center align-bottom'>
			</div>
			<div className='flex flex-col items-end'>
				<Link className='' reloadDocument scrollrestoration='true' to='/about'>
					About
				</Link>
				<Link className='' reloadDocument scrollrestoration='true' to='/services'>
					Services
				</Link>
				<Link className='' reloadDocument scrollrestoration='true' to='/contact'>
					Contact
				</Link>
			</div>
		</div>
	);
};

export default Footer;
