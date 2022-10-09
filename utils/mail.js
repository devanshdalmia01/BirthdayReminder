import nodemailer from "nodemailer";
import cron from "node-cron";
import * as dotenv from "dotenv";

dotenv.config();

const transport = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

const sendEmail = (name, email, date) => {
	let day = date.slice(3, 5);
	let month = date.slice(0, 2);
	cron.schedule(
		`0 0 ${day} ${month} *`,
		() => {
			transport
				.sendMail({
					from: process.env.EMAIL,
					to: email,
					subject: `aaj hbd hai ${name}`,
					html: `<h1>HBD hai</h1>
		  <h2>Hello ${name}</h2>`,
				})
				.catch((err) => console.log(err));
		},
		{
			scheduled: true,
			timezone: "Asia/Kolkata",
		}
	);
};

export { sendEmail };
