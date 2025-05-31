import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 Characters."],
    maxLength: [30, "First name cannot exceed 30 Characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [1, "Last name must be of at least 3 Characters."],
    maxLength: [30, "Last name cannot exceed 30 Characters."],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [
      13,
      "Phone number must contain 13 characters including country code.",
    ],
    maxLength: [
      13,
      "Phone number must contain 13 characters including country code.",
    ],
    set: (v) => {
      if (!v) return v;
      let val = v.trim();

      // Remove all spaces
      val = val.replace(/\s+/g, "");

      // If it already starts with +91, return as is
      if (val.startsWith("+91")) return val;

      // Otherwise add +91
      return `+91${val}`;
    },
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
