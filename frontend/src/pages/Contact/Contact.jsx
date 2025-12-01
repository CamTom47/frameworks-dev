import { useState, useEffect } from "react";
import Mailgun from "mailgun.js";
import FormData from "form-data";

import ButtonPrimary from "../../components/ButtonPrimary.tsx";
import "../../styles/forms.scss";

const Contact = () => {
	const [activeInput, setActiveInput] = useState(null);
	const [firstName, setFirstname] = useState("");
	const [lastName, setLastname] = useState("");
	const [number, setNumber] = useState("");
	const [email, setEmail] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [projectDetails, setProjectDetails] = useState("");
	const [errorObject, setErrorObject] = useState({});
	const [formStep, setFormStep] = useState(null);
	const [selectedService, setSelectedService] = useState(["Select A Service"]);

	const handleInputClick = (e) => {
		setActiveInput(e.target.id);
	};

	const subServices = {
		"Web Design": ["E-Commerce", "Personal Website", "Portfolio", "Business", "Blog", "Other"],
		"Web Development": ["Api", "Custom Software"],
		"Mobile Development": ["iOS", "Android", "Multiplatformed"],
		Redesign: ["Website", "Application"],
	};

	const handleInput = (e) => {
		const category = e.target.id;
		switch (category) {
			case "First Name":
				setFirstname(e.target.value);
				break;
			case "Last Name":
				setLastname(e.target.value);
				break;
			case "Email":
				setEmail(e.target.value);
				break;
			case "Phone Number":
				handleNumberInput(e.target.value);
				break;
			case "Project Details":
				setProjectDetails(e.target.value);
				break;
			case "input-company-name":
				setCompanyName(e.target.value);
				break;
		}
	};

	/**
	 * Set the service form input field
	 * @param {Event} e
	 */
	const handleServiceInput = (e) => {
		setSelectedService(e.target.id);
	};

	/**
	 * Form validation for number inputs
	 * @param {number} value
	 * @returns
	 */
	const handleNumberInput = (value) => {
		//verify that the input is a number
		const integer = new Number(value);
		if (isNaN(integer)) {
			errorObject.numberError = {
				message: "Input must be a number",
			};
			setErrorObject(errorObject);
		} else {
			setNumber(value);
		}
		return;
	};

	const subServiceComponents = selectedService.map((subservice) => {
		<option value={subservice}>{subservice}</option>;
	});

	/**
	 * Process the form information and send an email
	 */
	const sendFormSubmissionEmail = async () => {
		const mailgun = new Mailgun(FormData);
		const mg = mailgun.client({
			username: "api",
			key: import.meta.env.MAILGUN_API_KEY,
			// When you have an EU-domain, you must specify the endpoint:
			// url: "https://api.eu.mailgun.net"
		});
		try {
			const data = await mg.messages.create("sandbox459e38f8ec3441e8ae59a2e64b46b8e1.mailgun.org", {
				from: "Mailgun Sandbox <postmaster@sandbox459e38f8ec3441e8ae59a2e64b46b8e1.mailgun.org>",
				to: ["Cameron Thomas <cameront@frameworksdev.com>"],
				subject: "Hello Cameron Thomas",
				text: `Congratulations Cameron Thomas, you just sent an email with Mailgun! You are truly awesome!`,
				text: `First Name: ${firstName} \n
						Last Name: ${lastName} \n
						Phone Number: ${number} \n
						Preferred Email: ${email} \n
						Company: ${companyName} \n
						Project Details: ${projectDetails} \n
						Requested Service: ${selectedService}`,
			});

			console.log(data); // logs response data
		} catch (error) {
			console.log(error); //logs any error
		}
	};

	const handleFormSubmission = () => {
		setFormStep("Complete");
		sendFormSubmissionEmail();
	};

	return (
		<div className='contact-page-container'>
			{/* Contact Us Next Step Instructions */}
			<div className='text-content'>
				<div className='container-header'>
					<h2 className="page-header">Contact Us</h2>
					<p>For general inquiries and question please contact us at hello@frameworksdev.com</p>
				</div>
				{/* General Inquiry Section */}
				<form className='contact-form' action='submit'>
					{!formStep && (
						<div className='form-content column'>
							<h2 className='content-description'>
								If you're ready to get your project started, curious about how much it'll cost, or are wondering if your
								idea is feasible.{" "}
							</h2>
							<h3 className='content-description'>We're ready to help.</h3>
							<ButtonPrimary
								label='Get Started'
								type=''
								dark={true}
								action={() => setFormStep("General Information")}></ButtonPrimary>
						</div>
					)}
					{formStep === "General Information" && (
						<div className='form-content'>
							<div className='form-container left'>
								<h2 className='content-description'>Let's start off with some basic information</h2>
							</div>
							<div className='form-container right'>
								<div className='form-header'>General Information</div>
								<div className='input-container'>
									<div className='form-row'>
										<div className='form-div'>
											<label className={`form-label ${activeInput === "First Name" || firstName ? "active" : ""} `}>
												*First Name
											</label>
											<input
												id='First Name'
												className='form-input'
												type='text'
												onClick={handleInputClick}
												onChange={handleInput}
												value={firstName}
											/>
										</div>
										<div className='form-div'>
											<label className={`form-label ${activeInput === "Last Name" || lastName ? "active" : ""} `}>
												*Last Name
											</label>
											<input
												id='Last Name'
												className='form-input'
												type='text'
												onClick={handleInputClick}
												onChange={handleInput}
												value={lastName}
											/>
										</div>
									</div>

									<div className='form-row'>
										<div className='form-div'>
											<label className={`form-label ${activeInput === "Phone Number" || number ? "active" : ""}`}>
												Phone Number
											</label>
											<input
												id='Phone Number'
												className='form-input'
												type='text'
												onClick={handleInputClick}
												onChange={handleInput}
												value={number}
											/>
											{errorObject.numberError && (
												<span className='text-red-500'>{errorObject.numberError.message}</span>
											)}
										</div>
										<div className='form-div'>
											<label
												className={`form-label ${activeInput === "input-company-name" || companyName ? "active" : ""}`}>
												Company Name
											</label>
											<input
												id='input-company-name'
												className='form-input'
												type='text'
												onClick={handleInputClick}
												onChange={handleInput}
												value={companyName}
											/>
										</div>
									</div>
									<div className='form-div'>
										<label className={`form-label ${activeInput === "Email" || email ? "active" : ""} `}>*Email</label>
										<input
											id='Email'
											className='form-input'
											type='text'
											onClick={handleInputClick}
											value={email}
											onChange={handleInput}
										/>
									</div>
								</div>

								<div className='input-container'>
									<div className='form-button'>
										<ButtonPrimary label='Next' type='primary' dark={true} action={() => setFormStep("Project Details")} />
									</div>
								</div>
							</div>
						</div>
					)}
					{formStep === "Project Details" && (
						<div className='form-content'>
							<div className='form-container left'>
								<h2 className='content-description'>Now let's discuss project specifics</h2>
							</div>
							<div className='form-container right'>
								<div className='form-header'>Project Details</div>
								<div className='form-row'>
									<div className='form-column'>
										<p className='input-header'>Service Type</p>
										<div>
											<div className='form-row start'>
												<input type='checkbox' className='checkbox-input'></input>
												<label htmlFor=''>Web Design</label>
											</div>
											<div className='form-row start'>
												<input type='checkbox' className='checkbox-input'></input>
												<label htmlFor=''>Web Development</label>
											</div>
											<div className='form-row start'>
												<input type='checkbox' className='checkbox-input'></input>
												<label htmlFor=''>Mobile Development</label>
											</div>
											<div className='form-row start'>
												<input type='checkbox' className='checkbox-input'></input>
												<label htmlFor=''>Redesign</label>
											</div>
										</div>
									</div>
									<div className='form-column'>
										<div className='form-column'>
											<label className='input-header' htmlFor=''>
												Phase of Project
											</label>
											<select className='form-div select' name='' id=''>
												<option default> Select A Service</option>
												{selectedService && subServiceComponents}
											</select>
										</div>
										<div className='form-column'>
											<label className='input-header' htmlFor=''>
												Phase Of Project
											</label>
											<select className='form-div select' name='' id=''>
												<option default> Select A Phase</option>
												<option value=''>Ideation</option>
												<option value=''>Technical Documentation</option>
												<option value=''>MVP</option>
												<option value=''>Working Solution</option>
											</select>
										</div>
									</div>
								</div>
								<div className='text-area-container'>
									<label className='input-header'>Additional Details</label>
									<textarea className='input-textarea' name='' id=''></textarea>
								</div>

								<div className='input-container'>
									<div className='form-row center'>
										<ButtonPrimary label='Previous' type='primary' dark={true} action={() => setFormStep("General Information")} />
										<ButtonPrimary label='Submit' type='primary' dark={true} action={handleFormSubmission} />
									</div>
								</div>
							</div>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Contact;
