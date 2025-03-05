# LMS-Website
 A learning management system (LMS) website is a web-based application that helps create, manage, and assess training programs and courses. LMS websites can also be used to plan and implement learning processes. 

# Project-Link
Link:- https://lms-frontend-phi-three.vercel.app/ 

# 🚀 Project Overview

This is a Full Stack Learning Management System (LMS) built using the MERN stack (MongoDB, Express, React, Node.js). It features Clerk authentication for secure user access and Stripe integration for handling payments.

# 🌟 Features
- User Authentication with Clerk (Sign Up, Login, Logout, and Role-based Access Control)

- Course Management (Create, Update, Delete courses, Enrollments)

- Payment Integration with Stripe for purchasing courses

- Admin Dashboard for managing users, courses, and transactions

- Student Dashboard for tracking enrolled courses and progress

- Instructor Dashboard for creating and managing courses

- Video Content Hosting with secured access

- Progress Tracking for students

- Responsive UI built with React and Tailwind CSS
# 🛠️ Tech Stack
### Frontend:
- React.js
- Tailwind CSS
- React Router
- Clerk Authentication
### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- Stripe API
### Other Tools:
- JWT for secure user authentication
- Cloudinary for media storage
- Webhooks for payment confirmation
# 🔧 Installation & Setup
### Setup Environment Variables:
-Create a .env file in the backend directory and add:


MONGODB_URI = ''

CLERK_WEBHOOK_SECRET = ''
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

CLOUDINARY_NAME = ""
CLOUDINARY_API_KEY = ""
CLOUDINARY_SECRET_KEY = ""

STRIPE_PUBLISHABLE_KEY = ''
STRIPE_SECRET_KEY = ''
STRIPE_WEBHOOK_SECRET = ''

-Create a .env file in the frontend directory and add:



VITE_CLERK_PUBLISHABLE_KEY=''
VITE_CURRENCY = '₹'

#  Run the Application
# 🚀 Deployment
# 📬 Contact
For any inquiries, reach out via [abhishekmandavi912@gmail.com] or create an issue in this repository.

