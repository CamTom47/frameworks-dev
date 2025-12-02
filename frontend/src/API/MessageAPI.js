import axios from "axios";

const BASE_URL = "http://localhost:3001";

class MessageAPI {
	static async request(endpoint, data, method) {
		console.debug("API Call:", endpoint, data, method);

		const url = `${BASE_URL}/${endpoint}`;

		//if the request method is a get request pass the params else pass nothing in params;
		const params = method === "get" ? data : {};

		try {
			const response = (await axios({ url, method, data })).data;
			return response;
		} catch (err) {
			console.error("API Error:", err.response);
			let message =
				err.response.data.error.message ||
				"There seems to be a temporary issue with the API used to handle this contact form. Please try to submit again later, or send an email to hello@frameworksdev.com with your inquiry. Sorry for the inconvenience.";
			throw message;
		}
	}

	static processContactForm = async (formData) => {
		const sendMessage = await this.request("message", formData, "post");
		return sendMessage;
	};
}

export default MessageAPI