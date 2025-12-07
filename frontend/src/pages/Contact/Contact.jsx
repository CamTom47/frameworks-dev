import { useState, useEffect } from "react";
import MessageAPI from "../../API/MessageAPI.js";
import Footer from "../Footer/Footer.jsx";
import { useForm } from "react-hook-form";

import ButtonPrimary from "../../components/ButtonPrimary.tsx";

const Contact = () => {
	const [errorObject, setErrorObject] = useState({});
	const [formStep, setFormStep] = useState(null);
	const [selectedServices, setSelectedServices] = useState([]);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		companyName: "",
		projectDetails: "",
		selectedServices: "",
		projectPhase: "",
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// const handleInputClick = (e) => {
	// 	setActiveInput(e.target.id);
	// };

	const handleInput = (e) => {
		let category = "";
		if (e.target.id) category = e.target.id;
		else category = e.target.type;

		switch (category) {
			case "firstName":
				setFormData({ ...formData, firstName: e.target.value });
				// validateNameField("firstName", "First Name");

				break;
			case "lastName":
				setFormData({ ...formData, lastName: e.target.value });
				// validateNameField("lastName", "Last Name");

				break;
			case "number":
				setFormData({ ...formData, number: e.target.value });
				break;
			case "email":
				setFormData({ ...formData, email: e.target.value });
				break;
			case "companyName":
				setFormData({ ...formData, companyName: e.target.value });
				break;
			case "projectDetails":
				setFormData({ ...formData, projectDetails: e.target.value });
				break;
			case "checkbox":
				if (e.target.checked) setSelectedServices(new Array(...selectedServices, e.target.value));
				else setSelectedServices(selectedServices.filter((service) => service !== e.target.value));
				break;
			case "projectPhase":
				setFormData({ ...formData, projectPhase: e.target.value });
				break;
		}
	};

	const testSubmit = (data) => console.log(data);
	/**
	 * Set the service form input field
	 * @param {Event} e
	 */
	// const handleServiceInput = (e) => {
	// 	setSelectedServices(e.target.id);
	// };

	/**
	 * Form validation for number inputs
	 * @param {e} e
	 * @returns
	 */
	const handleNumberInput = (e) => {
		//verify that the input is a number
		// console.log(e.target.value)
		// console.log(+e.target.value)
		// if (new Number(+e.target.value)) console.log(e.target.value);
		// if(e.charcode)
		// if (isNaN(integer)) {
		// 	errorObject.numberError = {
		// 		message: "Input must be a number",
		// 	};
		// 	setErrorObject(errorObject);
		// } else {
		// 	handle(e);
		// }
		// return;
	};

	// const validateNameField = (field, formattedField) => {
	// 	console.log("field", field);
	// 	console.debug("content", formData[field]);
	// 	if (!formData[field].length > 0) {
	// 		console.error("error!");
	// 		setErrorObject(new Object({...errorObject, field: `${formattedField} is required` }));
	// 	}
	// };

	// const validateNumberField = () => {};

	// const validateEmailField = () => {};

	const validateGeneralInfoFields = (e) => {
		e.preventDefault();
		handleSubmit(testSubmit);
	};

	/**
	 * Process the form information and send an email
	 */
	const sendFormSubmissionEmail = async () => {
		MessageAPI.processContactForm(formData);
	};

	const handleFormSubmission = () => {
		// setFormStep("Complete");
		// sendFormSubmissionEmail();
	};

	console.log(errors);

	return (
		<div className=' flex flex-col justify-between h-screen w-full gap-y-12 items-center overflow-y-scroll'>
			{/* Contact Us Next Step Instructions */}
			<div className='bg-primary-dark font-bold pt-8 pb-8 text-center w-screen'>
				<h2 className='text-white text-5xl'>Contact Us</h2>
				<p className='text-white font-normal'>
					For general inquiries and question please contact us at hello@frameworksdev.com
				</p>
			</div>
			{/* General Inquiry Section */}
			<form className='px-4 h-fit w-full lg:px-160' action='submit'>
				{!formStep && (
					<div className='flex flex-col items-center text-center gap-y-12'>
						<h2 className='content-description'>
							If you're ready to get your project started, curious about how much it'll cost, or are wondering if your
							idea is feasible.{" "}
						</h2>
						<h3 className='text-xl text-secondary'>We're ready to help.</h3>
						<ButtonPrimary
							label='Get Started'
							type=''
							dark={true}
							action={() => setFormStep("General Information")}></ButtonPrimary>
					</div>
				)}
				{formStep === "General Information" && (
					<div className='bg-primary-dark p-4 rounded-md flex flex-col justify-between'>
						<div className='w-full text-center text-white pt-4'>
							<h2>Let's start off with some basic information</h2>
						</div>
						<div className='flex flex-col gap-y-4 py-8 '>
							<div className='text-white text-2xl text-center'>General Information</div>
							<div className='flex flex-col gap-y-4'>
								<div className='form-div'>
									<label className='text-xl text-white font-light'>First Name</label>
									{errors.firstName?.type === "required" && <p role='alert'>First name is required</p>}
									<input
										{...register("firstName", { required: { value: true, message: "First Name is required" } })}
										aria-invalid={errors.firstname ? "true" : "false"}
										id='firstName'
										className='rounded-md w-full bg-white h-8 px-2'
										type='text'
										onChange={handleInput}
										value={formData.firstName}
									/>
								</div>
								<div className='form-div'>
									<label className='text-xl text-white font-light'>*Last Name</label>
									{errors.lastName?.type === "required" && <p role='alert'>Last name is required</p>}
									<input
										{...register("lastName", { required: { value: true, message: "Last Name is required" } })}
										aria-invalid={errors.lastName ? "true" : "false"}
										id='lastName'
										className='rounded-md w-full bg-white h-8 px-2'
										type='text'
										onChange={handleInput}
										value={formData.lastName}
									/>
								</div>

								<div className='form-div'>
									<label className='text-xl text-white font-light'>Phone Number</label>
									{errors.phoneNumber?.type === "required" && <p role='alert'>Phone Number is required</p>}
									{errors.phoneNumber?.type === "pattern" && <p role='alert'>{errors.phoneNumber.message}</p>}
									<input
										{...register("phoneNumber", {
											required: { value: true, message: "Phone Number is required" },
											pattern: {
												value: /(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/,
												message: "This is not a valid phone number",
											},
											message: "Invalid Phone Number",
										})}
										id='phoneNumber'
										className='rounded-md w-full bg-white h-8 px-2'
										type='text'
										onChange={handleNumberInput}
										value={formData.number}
									/>
								</div>
								<div className='form-div'>
									<label className='text-xl text-white font-light'>Company Name</label>
									<input
										id='companyName'
										className='rounded-md w-full bg-white h-8 px-2'
										type='text'
										onChange={handleInput}
										value={formData.companyName}
									/>
								</div>
								<div className='form-div'>
									<label className='text-xl text-white font-light'>*Email</label>
									{errors.email?.type === "required" && <p role='alert'>{errors.email.message}</p>}
									{errors.email?.type === "pattern" && <p role='alert'>{errors.email.message}</p>}
									<input
										{...register("email", {
											required: {value: true, message: "Email is required"},
											pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "This does not match a valid email address"}
										})}
										id='email'
										className='rounded-md w-full bg-white h-8 px-2'
										type='text'
										value={formData.email}
										onChange={handleInput}
									/>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-y-4 lg:flex-row lg:justify-around'>
							<ButtonPrimary label='Cancel' type='primary' action={() => setFormStep("")} />
							<ButtonPrimary label='Next' type='primary' dark={true} action={handleSubmit(testSubmit)} />
						</div>
					</div>
				)}
				{formStep === "Project Details" && (
					<div className='bg-primary-dark p-4 rounded-md flex flex-col'>
						<div className='w-full text-center text-white pt-4'>
							<h2 className='content-description'>Now let's discuss project specifics</h2>
						</div>
						<div className='flex flex-col justify-between gap-y-4 pt-12 '>
							<div className='text-white text-2xl text-center'>Project Details</div>
							<div className='flex flex-col gap-y-4'>
								<p className='text-xl text-white font-light'>Service Type</p>
								<div className='flex flex-col [&_label]:text-white gap-y-4 lg:gap-y-0'>
									<div className='flex gap-x-4 items-center'>
										<input value='Web Design' onChange={handleInput} type='checkbox' className='size-4'></input>
										<label htmlFor=''>Web Design</label>
									</div>
									<div className='flex gap-x-4 items-center'>
										<input value='Web Development' onChange={handleInput} type='checkbox' className='size-4'></input>
										<label htmlFor=''>Web Development</label>
									</div>
									<div className='flex gap-x-4 items-center'>
										<input value='Mobile Development' onChange={handleInput} type='checkbox' className='size-4'></input>
										<label htmlFor=''>Mobile Development</label>
									</div>
									<div className='flex gap-x-4 items-center'>
										<input value='Redesign' onChange={handleInput} type='checkbox' className='size-4'></input>
										<label htmlFor=''>Redesign</label>
									</div>
								</div>
							</div>

							<div className='flex flex-col gap-y-4'>
								<label className='text-xl text-white font-light' htmlFor=''>
									Phase Of Project
								</label>
								<select onChange={handleInput} className='rounded-md w-full bg-white h-8' name='' id='projectPhase'>
									<option default> Select A Phase</option>
									<option value='Ideation'>Ideation</option>
									<option value='Technical Documentation'>Technical Documentation</option>
									<option value='MVP'>MVP</option>
									<option value='Working Solution'>Working Solution</option>
								</select>
							</div>
							<div className='flex flex-col gap-y-4'>
								<label className='text-xl text-white font-light'>Additional Details</label>
								<textarea
									onChange={handleInput}
									className='bg-white rounded-md h-40'
									name=''
									id='projectDetails'></textarea>
							</div>

							<div className='flex flex-col gap-y-4 lg:flex-row lg:justify-around'>
								<ButtonPrimary
									label='Previous'
									type='primary'
									dark={true}
									action={() => setFormStep("General Information")}
								/>
								<ButtonPrimary label='Submit' type='primary' dark={true} action={handleFormSubmission} />
							</div>
						</div>
					</div>
				)}
			</form>
			<Footer></Footer>
		</div>
	);
};

export default Contact;
