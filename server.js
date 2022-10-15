import mongoose from "mongoose";
import app from "./app.js";
import birthdays from "./models/birthdays.js";
import { sendEmail } from "./utils/mail.js";

const connectDB = async () => {
	try {
		mongoose.connect(process.env.MONOGODBURL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

const start = async () => {
	try {
		await connectDB();
		app.listen(process.env.PORT, firstFunction);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};
const firstFunction = () => {
	console.log(`Server is listening on port ${process.env.PORT}...`);
	setInterval(async () => {
		let todayMonth = new Date().getMonth() + 1;
		let todayDate = new Date().getDate();
		let todayBirthdays = await birthdays.aggregate([{ $project: { m: { $month: "$dob" }, d: { $dayOfMonth: "$dob" } } }, { $match: { m: todayMonth, d: todayDate } }]);
		let allUsers = await birthdays.find({});
		if (todayBirthdays.length) {
			todayBirthdays.forEach(async (birthday) => {
				let data = await birthdays.findById(birthday._id);
				allUsers.forEach((user) => {
					if (user.id !== data.id) {
						console.log(1, user.name, user.email, data.name);
						sendEmail(user.name, user.email, data.name);
					}
				});
			});
		}
	}, 86400000);
};
start();
