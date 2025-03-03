import {v2 as cloudinarry} from 'cloudinary'

const connectCloudinary = async () => {
    cloudinarry.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        cloud_name: process.env.CLOUDINARY_SECRET_KEY,
    })
}

export default connectCloudinary