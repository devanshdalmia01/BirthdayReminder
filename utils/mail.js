import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

const transport = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

const sendEmail = (recieverName, recieverEmail, birthdayPersonName) => {
	console.log(2, recieverName, recieverEmail, birthdayPersonName);
	transport
		.sendMail({
			from: process.env.EMAIL,
			to: recieverEmail,
			subject: `aaj hbd hai ${birthdayPersonName} ka`,
			html: `<h1>HBD hai ${birthdayPersonName} ka</h1>
		  <h2>Hello ${recieverName}</h2>`,
		})
		.catch((err) => console.log(err));
};

export { sendEmail };
