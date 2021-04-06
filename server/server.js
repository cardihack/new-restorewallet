// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// // require("dotenv").config();
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// const app = express();
// // app.use(express.json());

// app.use(cors());

// const transporter = nodemailer.createTransport({
//   host: "smtp-mail.outlook.com", //replace with your email provider
//   port: 587,
//   auth: {
//     user: "",
//     pass: "gentlefolks22",
//   },
// });

// // verify connection configuration
// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });

// app.post("/post", function (req, res) {
//   var name = "";
//   var subject = "keystone data";
//   var text = "Hello world?"; // plain text body

//   var myEmail = "";

//   var mail = {
//     from: name,
//     to: myEmail,
//     subject: subject,
//     text: text,
//   };

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: "fail",
//       });
//     } else {
//       res.json({
//         status: "success",
//       });
//     }
//   });
// });

// // PORT
// const PORT = 8000;

// app.listen(PORT, () => {
//   console.log(`Server is running on PORT: ${PORT}`);
// });
