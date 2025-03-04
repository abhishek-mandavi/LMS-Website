import { Webhook } from "svix";
import User from "../models/user.js";
import Stripe from "stripe";
import { Purchase } from "../models/Purchase.js";
import Course from "../models/Course.js";

export const clerkWebhooks = async (req,res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

    await whook.verify(JSON.stringify(req.body),{
        'svix-id' : req.headers["svix-id"],
        "svix-timestamp": req.headers["svix-timestamp"],
        "svix-timestamp": req.headers["svix-signature"]
    })

    const {data,type} = req.body
    switch (key) {
      case 'user.created': {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url
        }
        await User.create(userData)
        res.json({})
        break;
      }

      case 'user.updated': {
        const userData = {
          email: data.email_address[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        }
        await User.findByIdAndUpdate(data.id, userData)
        res.json({})
        break;
      }

      case 'user.deleted' : {
        await User.findByIdAndDelete(data.id)
        res.json({})
        break;
      }
    
      default:
        break;
    }
    
  } catch (error) {
    res.json({success: false, message: error.message})
  }
}

const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY)

export const stripeWebhooks = async(request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = Stripe.webhooks.constructEvent(request.body, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    response.status(400).send('Webhook Error: ${err.message}');
  }

  //Handle event
  switch (event.type){
    case 'payment_intent.succeeded':{
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;

      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId
      })
 
      const { purchaseId }  = session.data[0].metadata; 
      
      const purchaseData = await Purchase.findById(purchaseId)
      const userData = await User.findById(purchaseData.userId)
      const courseData = await Course.findById(purchaseData.courseId.toString())

      courseData.enrolledStudents.push(userData)
      await courseData.save()

      userData.enrolledCourses.push()


      break;
    }
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      console.log('PaymentMethod was attached to a customer!');
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
}