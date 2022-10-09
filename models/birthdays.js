import mongoose from "mongoose";
import { v4 } from "uuid";

const birthdaySchema = mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true,
		default: v4(),
	},
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
		trim: true,
	},
	dob: {
		type: Date,
		required: true,
	},
	image: {
		type: String,
	},
});

export default mongoose.model("Birthdays", birthdaySchema);
