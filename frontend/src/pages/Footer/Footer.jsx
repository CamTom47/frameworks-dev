import { Link } from "react-router";
import linkedInLogo from "../../assets/linkedIn/in-logo/InBug-White.png";

const Footer = () => {
	return (
		<div className='h-max w-screen flex flex-col justify-between bg-white *:text-primary-dark pt-12 pb-4 px-9 gap-y-8 lg:gap-y-0 border-t border-primary-dark' style={{boxShadow: '0 4px 10px 0'}}>
			<div className='flex justify-between'>
				<div className='flex flex-col justify-end lg:justify-start'>
					<p>hello@frameworksdev.com</p>
					<a href='linkedin.com/company/frameworks-development' className='' src={linkedInLogo} />
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
			<div className='flex flex-col items-center text-center pt-2 pb-4 h-22 border-t border-t-background lg:border-none lg:flex-row lg:justify-center lg:items-start lg:gap-x-4 lg:p-0 lg:pb-4'>
				<p className=''>Frameworks Development, LLC</p>
				<p className=''>Est. 2025</p>
			</div>
		</div>
	);
};

export default Footer;
