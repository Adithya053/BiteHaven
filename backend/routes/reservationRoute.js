import express from "express";
import send_reservation from "../controller/reservation.js";

const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).json({ message: "Reservation API is working" });
});
router.post("/send", send_reservation);

export default router;
