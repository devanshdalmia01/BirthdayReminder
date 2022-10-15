import mongoose from "mongoose";

const birthdaySchema = mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
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
