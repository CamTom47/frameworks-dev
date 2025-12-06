import { useState } from "react";
import AboutCard from "../../components/AboutCard";

const AboutPage = () => {
	const processArray = ["Planning", "Design", "Implementation", "Testing", "Deployment", "Maintenance"];

	const [sliderNavStuck, setSliderNavStuck] = useState(false);
	const [lastScrollStop, setLastScrollStop] = useState(window.screenTop);

	return (
		<div className='h-fit flex flex-col w-full'>
			<div className='bg-primary-dark font-bold pt-8 pb-8 text-center w-full'>
				<h1 className='text-white text-5xl'>About Us</h1>
			</div>
			<div className='flex flex-col h-full gap-y-4 py-68 items-center px-4'>
				<h2 className='text-wrap text-4xl text-primary-dark font-black text-center'>Who Are We?</h2>
				<p className='w-fit [&_b]:text-secondary text-center text-2xl leading-10'>
					<b className='text-secondary'>Frameworks Development</b> is a software development agency that focuses on
					building one of a kind, custom software that meets the needs of <b>Individiual Clients</b>, <b> Start Ups</b>,
					and <b>Small Businesses</b>.
				</p>
			</div>

			<div className='flex flex-col justify-center items-center px-4 gap-y-4'>
				<h1 className='text-wrap text-4xl text-primary-dark font-black text-center'>Our Process</h1>
				<p className='w-fit text-center text-2xl leading-10'>
					Our development process is closely aligned with Software Development Life Cycle standards to promote:
				</p>
				<p className='[&_span]:text-secondary w-fit leading-12 text-center'>
					<ul className="text-2xl leading-10 [&_li]:border-b [&_li]:pb-4">
						<li>
							Increased <span className='normal'>transparency</span> for project stakeholders.
						</li>
						<li>
							<span className='normal'>Reliable</span> estimation and schedule forecasting.
						</li>
						<li>
							<span className='normal'>Streamlined</span> processes for development and customer satisfaction.
						</li>
						<li>
							Allowance project <span className='normal'>flexibility</span> as development progresses.
						</li>
					</ul>
				</p>
			</div>

			<div className='flex flex-col justify-center gap-y-20 px-4'>
				{/* Planning Section */}
				<div className='flex flex-col gap-y-12'>
					<div className='flex flex-col gap-y-4'>
						<h2 id='planning' className='text-wrap text-4xl text-primary-dark font-black text-center mt-40'>
							Planning
						</h2>
						<p className='w-fit text-center text-2xl leading-10'>
							During the planning phase our primary goal is to gain an understanding of your vision. We'll discuss the
							details of what you aim to achieve and develop a plan that will act as a strong foundation to start the
							project off in the right direction
						</p>
					</div>
					<div className='flex flex-col items-center gap-y-12 w-full'>
						<AboutCard
							title='Project Scope'
							text='Create a comprehensive list of project requirements'
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
									<g fill='none' fill-rule='evenodd'>
										<path d='m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z' />
										<path
											fill='currentColor'
											d='M15 2a2 2 0 0 1 1.732 1H18a2 2 0 0 1 2 2v12a5 5 0 0 1-5 5H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1.268A2 2 0 0 1 9 2zM7 5H6v15h9a3 3 0 0 0 3-3V5h-1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2m9.238 4.379a1 1 0 0 1 0 1.414l-4.95 4.95a1 1 0 0 1-1.414 0l-2.12-2.122a1 1 0 0 1 1.413-1.414l1.415 1.414l4.242-4.242a1 1 0 0 1 1.414 0M15 4H9v1h6z'
										/>
									</g>
								</svg>
							}
						/>
						<AboutCard
							title={"Project Objectives"}
							text={"Establish milestones and goals to track project success."}
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
									<g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
										<path d='M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0' />
										<path d='M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0' />
										<path d='M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0' />
									</g>
								</svg>
							}
						/>

						<AboutCard
							title={"Resource Planning"}
							text={"Refine the project schedule and timeline"}
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
									<g fill='none'>
										<path d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
										<path
											fill='currentColor'
											d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1'
										/>
									</g>
								</svg>
							}
						/>
					</div>
				</div>
				{/* Design section */}
				<div className='flex flex-col gap-y-12'>
					<div className='flex flex-col gap-y-4'>
						<h2 className='text-primary-dark font-black text-4xl'>Design</h2>
						<p className='w-3/4 text-md font-medium'>
							Before we dive into the technical side of things, let's talk design. By collaborating back and forth and
							landing on an effective User Interface, our team is able to steam like the remainder of the
							technicalities.
						</p>
					</div>
					<div className='flex justify-center gap-x-12 w-full'>
						<AboutCard
							title={"Draft Design"}
							text={"Create low fidelity prototypes to communicate core structure"}
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
									<path
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M12 9v2m4 0V7m-8 4h.01M3 3h1m17 0h-1m0 0v12h-6m6-12H4m0 0v12h6m0 0l-2 6m2-6h4m0 0l2 6'
									/>
								</svg>
							}
						/>
						<AboutCard
							title={"Mock Design"}
							text={"Refine design with focus aesthetics of the project"}
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
									<path
										fill='currentColor'
										d='M3 13V5q0-.825.588-1.412T5 3h6v10zM13 3h6q.825 0 1.413.588T21 5v4h-8zm0 18V11h8v8q0 .825-.587 1.413T19 21zM3 15h8v6H5q-.825 0-1.412-.587T3 19z'
									/>
								</svg>
							}
						/>
						<AboutCard
							title={"Design Buyoff"}
							text={"Complete project design and prepare for development"}
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
									<g fill='none'>
										<path d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
										<path
											fill='currentColor'
											d='M7.06 16.836a1.25 1.25 0 0 1 1.86 1.666l-.091.102l-2.298 2.298a1.5 1.5 0 0 1-2.008.103l-.114-.103l-1.237-1.238a1.25 1.25 0 0 1 1.666-1.859l.102.091l.53.53zM20 17.5a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 1 1 0-3zM8.83 9.836a1.25 1.25 0 0 1 0 1.768l-2.3 2.298a1.5 1.5 0 0 1-2.122 0l-1.237-1.238a1.25 1.25 0 1 1 1.768-1.768l.53.53l1.59-1.59a1.25 1.25 0 0 1 1.769 0ZM20 10.5a1.5 1.5 0 0 1 .145 2.993L20 13.5h-8a1.5 1.5 0 0 1-.144-2.993L12 10.5zM7.06 2.836a1.25 1.25 0 0 1 1.86 1.666l-.091.101L6.53 6.902a1.5 1.5 0 0 1-2.008.103l-.114-.103l-1.237-1.238a1.25 1.25 0 0 1 1.666-1.859l.102.091l.53.53zM20 3.5a1.5 1.5 0 0 1 .145 2.993L20 6.5h-8a1.5 1.5 0 0 1-.144-2.993L12 3.5z'
										/>
									</g>
								</svg>
							}
						/>
					</div>
				</div>
				{/* Implementation */}
				<div className='flex flex-col gap-y-12'>
					<div className='flex flex-col gap-y-4'>
						<h2 className='text-primary-dark font-black text-4xl'>Implementation</h2>
						<p className='w-3/4 text-md font-medium'>
							By combining information from the planning and design phases, our team will begin to bring your project to
							life.
						</p>
					</div>
					<div className='flex flex-col gap-y-12'>
						<div className='flex justify-center gap-x-12 w-full'>
							<AboutCard
								title={"Development Checkins"}
								text={"Create low fidelity prototypes that communicate core structure"}
								icon={
									<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
										<path
											fill='currentColor'
											d='M17 19h-2q-.425 0-.712-.288T14 18t.288-.712T15 17h2v-2q0-.425.288-.712T18 14t.713.288T19 15v2h2q.425 0 .713.288T22 18t-.288.713T21 19h-2v2q0 .425-.288.713T18 22t-.712-.288T17 21zM5 20q-.825 0-1.412-.587T3 18V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h6V3q0-.425.288-.712T15 2t.713.288T16 3v1h1q.825 0 1.413.588T19 6v5q0 .425-.288.713T18 12t-.712-.288T17 11v-1H5v8h6q.425 0 .713.288T12 19t-.288.713T11 20zM5 8h12V6H5zm0 0V6z'
										/>
									</svg>
								}
							/>
							<AboutCard
								title={"Milestone Prototyping"}
								text={"Refine design with focus aesthetics of the project"}
								icon={
									<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
										<g fill='none'>
											<path d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
											<path
												fill='currentColor'
												d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H5v14h14zm-6.963 2.729c.271-.868 1.44-.95 1.85-.184l.052.11L15.677 12H17a1 1 0 0 1 .117 1.993L17 14h-1.993a1.01 1.01 0 0 1-.886-.524l-.052-.11l-.953-2.384l-1.654 5.293c-.259.828-1.355.953-1.807.255l-.06-.105L8.381 14H7a1 1 0 0 1-.117-1.993L7 12h1.994c.34 0 .654.17.84.449l.063.11l.388.776z'
											/>
										</g>
									</svg>
								}
							/>
							<AboutCard
								title={"Progress Reporting"}
								text={"Complete project design and prepare for development"}
								icon={
									<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
										<path
											fill='currentColor'
											d='M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 2v2Q8.675 4 6.337 6.338T4 12t2.338 5.663T12 20t5.663-2.337T20 12h2q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22'
										/>
									</svg>
								}
							/>
						</div>

						<div className='flex justify-center gap-x-12 w-full'>
							<AboutCard
								title={"Data Migration"}
								text={"Create low fidelity prototypes that communicate core structure"}
								icon={
									<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
										<g fill='none'>
											<path d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
											<path
												fill='currentColor'
												d='M9.52 3a2 2 0 0 1 1.561.75l1.4 1.75H20a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H4v14h16V7.5h-7.52a2 2 0 0 1-1.561-.75zM12 10a1 1 0 0 1 1 1v2.709l.414-.415a1 1 0 1 1 1.414 1.415l-2.12 2.12a1 1 0 0 1-1.415 0l-2.121-2.12a1 1 0 1 1 1.414-1.415l.414.415V11a1 1 0 0 1 1-1'
											/>
										</g>
									</svg>
								}
							/>
							<AboutCard
								title={"External Integrations"}
								text={"Refine design with focus aesthetics of the project"}
								icon={
									<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
										<g fill='none'>
											<path d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
											<path
												fill='currentColor'
												d='M16.243 9.878a1 1 0 0 1 1.32-.083l.094.083L19.778 12a5.5 5.5 0 0 1-7.596 7.952L12 19.778l-2.121-2.121a1 1 0 0 1 1.32-1.498l.094.083l2.121 2.122a3.5 3.5 0 0 0 5.091-4.8l-.141-.15l-2.121-2.121a1 1 0 0 1 0-1.415M9.17 9.171a1 1 0 0 1 1.32-.083l.095.083l4.242 4.243a1 1 0 0 1-1.32 1.497l-.094-.083l-4.243-4.242a1 1 0 0 1 0-1.415m-4.95-4.95a5.5 5.5 0 0 1 7.597-.173l.182.174l2.121 2.12A1 1 0 0 1 12.8 7.84l-.094-.083l-2.121-2.121a3.5 3.5 0 0 0-5.091 4.8l.141.15l2.121 2.12a1 1 0 0 1-1.32 1.498l-.094-.083L4.222 12a5.5 5.5 0 0 1 0-7.778Z'
											/>
										</g>
									</svg>
								}
							/>
						</div>
					</div>
				</div>
				{/* Testing Section */}
				<div className='flex flex-col gap-y-12'>
					<div className='flex flex-col gap-y-4'>
						<h2 className='text-primary-dark font-black text-4xl'>Testing</h2>
						<p className='w-3/4 text-md font-medium'>
							The best method for avoiding technical issues in your application after deployment is testing.
						</p>
					</div>
					<div className='flex justify-center gap-x-12 w-full'>
						<AboutCard
							title={"Built In Testing"}
							text={"Create low fidelity prototypes that communicate core structure"}
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
									<path
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M18 14a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 0V9a2 2 0 0 0-2-2h-1m-2 0l2-2v2m-2 0h2m-2 0l2 2V7m-9 4a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 0v5a2 2 0 0 0 2 2h1m2 0l-2 2v-2m2 0H9m2 0l-2-2v2'
									/>
								</svg>
							}
						/>
						<AboutCard
							title={"Stakeholder Testing"}
							text={"Refine design with focus aesthetics of the project"}
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
									<g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
										<circle cx='9' cy='9' r='4' />
										<path d='M16 19c0-3.314-3.134-6-7-6s-7 2.686-7 6m13-6a4 4 0 1 0-3-6.646' />
										<path d='M22 19c0-3.314-3.134-6-7-6c-.807 0-2.103-.293-3-1.235' />
									</g>
								</svg>
							}
						/>
					</div>
				</div>
				{/* Deployment Section */}
				<div className='flex flex-col gap-y-12'>
					<div className='flex flex-col gap-y-4'>
						<h2 className='text-primary-dark font-black text-4xl'>Deployment</h2>
						<p className='w-3/4 text-md font-medium'>
							After making this available to the world. This is where we hand you the keys!
						</p>
					</div>
					<div className='flex justify-center gap-x-12 w-full'>
						<AboutCard
							title={"Account Transfers"}
							text={"Transfer all applicable accounts necessary for your project to run into your control"}
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
									<path
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M15 15a6 6 0 1 0-5.743-4.257L9 11l-5.707 5.707a1 1 0 0 0-.293.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1a1 1 0 0 1 1-1a1 1 0 0 0 1-1a1 1 0 0 1 1-1h.586a1 1 0 0 0 .707-.293L13 15l.257-.257A6 6 0 0 0 15 15m2-6a2 2 0 0 0-2-2'
									/>
								</svg>
							}
						/>
						<AboutCard
							title={"Project Handoff"}
							text={"Our team will train necessary personnel on how the project functions"}
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
									<path
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10m6-6v.172a2 2 0 0 1-.586 1.414l-3.828 3.828a2 2 0 0 1-1.414.586H15m6-6h-4a2 2 0 0 0-2 2v4M7 7h10M7 11h10M7 15h4'
									/>
								</svg>
							}
						/>
						<AboutCard
							title={"Project Release"}
							text={"We'll handle the lift of making your project available to the world"}
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
									<g fill='none'>
										<circle
											cx='12'
											cy='12'
											r='9'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
										/>
										<path
											fill='currentColor'
											d='M8 6V4c2.5-1.167 8.4-2 12 4h-1a2 2 0 0 0-2 2a2 2 0 1 1-4 0a2 2 0 0 0-2-2h-1a2 2 0 0 1-2-2m9 10h3c-1.2 1.6-3.833 3.333-5 4v-2a2 2 0 0 1 2-2m-6 2v2c-6.4-.4-8-5.5-8-8h2a2 2 0 0 1 2 2a2 2 0 0 0 2 2a2 2 0 0 1 2 2'
										/>
										<path
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M8 6V4c2.5-1.167 8.4-2 12 4h-1a2 2 0 0 0-2 2a2 2 0 1 1-4 0a2 2 0 0 0-2-2h-1a2 2 0 0 1-2-2m9 10h3c-1.2 1.6-3.833 3.333-5 4v-2a2 2 0 0 1 2-2m-6 2v2c-6.4-.4-8-5.5-8-8h2a2 2 0 0 1 2 2a2 2 0 0 0 2 2a2 2 0 0 1 2 2'
										/>
									</g>
								</svg>
							}
						/>
					</div>
				</div>
				{/* Deployment Section */}
				<div className='flex flex-col gap-y-12'>
					<div className='flex flex-col gap-y-4'>
						<h2 className='text-primary-dark font-black text-4xl'>Maintenance</h2>
						<p className='w-3/4 text-md font-medium'>
							Post Deployment project maintenance will vary project to project based on agreed upon terms upon contract
							execution.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
