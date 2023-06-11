const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/conn");
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const path = require("path");
const notificationRouter = require("./routes/notificationRouter");
const router = express.Router();
const cookieParser = require('cookie-parser');


const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Sample route to check the backend
router.get('/ping', (req, res) => {
  res.send('Backend is running!');
});

app.listen(port, () => {

  console.log(`Server running on port ${port}`);

});
