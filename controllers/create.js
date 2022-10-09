import birthdays from "../models/birthdays.js";
import { sendEmail } from "../utils/mail.js";

const createBirthday = async (req, res) => {
	const newBirthday = new birthdays(req.body);
	newBirthday.save((err, doc) => {
		if (err) {
			return res.status(400).json({ success: false, message: err.message });
		}
		res.status(200).json({
			success: true,
			data: doc,
		});
		sendEmail(req.body.name, "202112002@daiict.ac.in", req.body.dob.slice(5, 10));
	});
};

export { createBirthday };
