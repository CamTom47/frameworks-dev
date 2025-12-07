import ButtonLink from "../../../components/ButtonLink";

const AboutSection = () => {
	return (
		<div className='h-fit flex flex-col w-full items-center lg:h-screen'>
			<div className='bg-primary-dark font-bold pt-8 pb-8 text-center w-full'>
				<h1 className='text-white text-5xl'>Frameworks Development</h1>
			</div>
			<div className='flex flex-col h-full gap-y-12 py-40 items-center px-4 lg:w-1/2 lg:px-20'>
				<h2 className='text-wrap text-4xl text-primary-dark font-black text-center'>
					Software Engineering Solutions For Your Unique Problems
				</h2>
				<div className="flex flex-col gap-y-12 justify-center items-center">
					<p className='w-fit text-center font-normal text-lg'>
						We develop with a customer centric focus. Our number one goal is to ensure your needs are met at all phases
						of the project to successfully deliver the product that you envision.
					</p>
					<div className='flex flex-col w-full text-center gap-y-4 lg:flex-row lg:justify-around'>
						<ButtonLink label='Learn More' url='/about' size='large' type='primary' dark={true} />
						<ButtonLink label='Get In Contact' url='/contact' size='large' type='primary' dark={true} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;

