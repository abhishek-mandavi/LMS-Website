import { Webhook } from "svix";
import User from "../models/user.js";

export const clerkWebhooks = async (req,res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

    await whook.verify(JSON.stringify(req.body),{
        'svix-id' : req.headers["svix-id"],
        "svix-timestamp": req.headers["svix-timestamp"],
        "svix-timestamp": req.headers["svix-signature"]
    })

    const {data,type} = req.body
    
  } catch (error) {
    
  }
}