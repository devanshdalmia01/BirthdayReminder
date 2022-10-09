import birthdays from "../models/birthdays.js";

const readBirthday = async (req, res) => {
	return res.status(200).json({
		success: true,
		data: await birthdays.find({}),
	});
};

export { readBirthday };
