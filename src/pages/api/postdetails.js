import connectDb from "../../../middleware/mongoose";
import contact from "../../../models/contact";
import nodemailer from "nodemailer";

const handler = async (req, res) => {
    const { name, email, message } = req.body;
    if (req.method == "POST") {
      let u = new contact({ name, email, message });
      // Nodemailer
      await u.save();
    }
  
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "gss12111408@gmail.com",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: "gss12111408@gmail.com",
    to: email,
    subject: `Message From Gagan Chaudhary Portfolio Site`,
    text: "Sent from: " + "gss12111408@gmail.com",
    html: `<div>Thanks Mr./Mrs. ${name} for contacting Gagan Chaudhary ,will respond to your query i.e ( ${message} ) in 1-2 business days.</div><h3>Have a good day.</h3><p>Sent from: gss12111408@gmail.com</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) 
    console.log("an error occured");
    else console.log("done");
  });
  res.status(200).json({success:"success"})
};

export default connectDb(handler);
