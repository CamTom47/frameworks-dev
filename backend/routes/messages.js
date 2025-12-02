import express from "express";
const router = express.Router();
import axios from "axios";
import Mailgun from "mailgun.js";
import FormData from "form-data";

router.post("/", async (req, res, next) => {
	try {
		const { firstName, lastName, number, email, companyName, projectDetails, selectedService } = req.body;

		const mailgun = new Mailgun(FormData);
		const mg = mailgun.client({
			username: "api",
			key: process.env.MAILGUN_API_KEY,
			// When you have an EU-domain, you must specify the endpoint:
			// url: "https://api.eu.mailgun.net"
		});

		const message = await mg.messages.create('sandbox459e38f8ec3441e8ae59a2e64b46b8e1.mailgun.org', {
			from: `Mailgun Sandbox <postmaster@sandbox459e38f8ec3441e8ae59a2e64b46b8e1.mailgun.org>`,
			to: ["Cameron Thomas <cameront@frameworksdev.com>"],
			subject: `Frameworks Dev Inquiry Form Submission - ${firstName} ${lastName} - ${companyName}`,
			text: `
                    First Name: ${firstName} \n
                    Last Name: ${lastName} \n
                    Phone Number: ${number} \n
                    Preferred Email: ${email} \n
                    Company: ${companyName} \n
                    Project Details: ${projectDetails} \n
                    Requested Service: ${selectedService}`,
		});

		//if the message was send successfully;
		if(message.status === 200){
			return res.json({ message: "Your message has been sent and will be reviewed as soon as possible. Thank you!" });
		}
	} catch (err) {
		console.error(`An error occured while trying to send your inquiry: ${err}`);
		next(err);
	}
});

export default router;
