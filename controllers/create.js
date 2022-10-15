import birthdays from "../models/birthdays.js";
import { v4 } from "uuid";

const createBirthday = async (req, res) => {
	const newBirthday = new birthdays({
		...req.body,
		id: v4(),
	});
	newBirthday.save((err, doc) => {
		if (err) {
			return res.status(400).json({ success: false, message: err.message });
		}
		res.status(200).json({
			success: true,
			data: doc,
		});
	});
};

export { createBirthday };
