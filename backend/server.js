import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./config/config.env" }); // ✅ Add this

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`SERVER HAS STARTED AT http://0.0.0.0:${process.env.PORT}`);
});
