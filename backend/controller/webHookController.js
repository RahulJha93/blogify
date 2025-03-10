import { Webhook } from "svix";
import userModel from "../models/userModel.js";

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  !WEBHOOK_SECRET && console.log("WEBHOOK_SECRET NEEDED");

  const payload = req.body;
  const headers = req.headers;
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    res.status(400).json({
      message: "Webhook verification failed !",
    });
  }
  // Do something with the message...
  if (evt.type === "user.created") {
    const newUser = new userModel({
      clerkUserId: evt.data.id,
      username: evt.data.username || evt.data.email_addresses[0].email_address,
      email: evt.data.email_addresses[0].email_address,
      img: evt.data.image_url,
    });
    await newUser.save();
  }
  res.status(200).json({ message: "User created successfully" });
};
