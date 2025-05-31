import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";
import { sendEmail } from "../utils/sendEmail.js";

const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    // Save reservation in MongoDB
    await Reservation.create({ firstName, lastName, email, date, time, phone });

    // Send SMS confirmation
    await sendEmail(
      email,
      "Reservation Confirmed",
      `Hi ${firstName}, your reservation for ${date} at ${time} is confirmed!`
    );
    // Respond to frontend
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    return next(error);
  }
};

export default send_reservation;
