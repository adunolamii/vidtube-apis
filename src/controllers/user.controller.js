import {ansyncHandler} from "../utils/ansyncHandler";
import { apiError} from "../utils/apiResponse.js"
import {user} from "../models/user.models.js"
import { uloadCloudinary } from "../utils/cloudinary.js";


const registration = ansyncHandler (async (req, res)=>{
    const {fullname, emai, username, password}= req.body

    // VALIDATION
    if(
        [fullname, username, email, password].some((fields)=> fields?.trim() === "")
    ){
        throw new apiError(400, "all fields are required")
    }
    const existedUser = await user.findOne({
        $or: [{username}, {emai}]
    })
    if (existedUser){
        throw new apiError(409, "user with email or username already exists") 
    }

   const avatarLocalPath = req.files?.avatar[0]?.path
   const coverLocalPath = req.files?.coverImage[0]?.path

   if (!avatarLocalPath){
    throw new apiError(400, "avatar file is missing")
   }
        const avatar= await uloadCloudinary(avatarLocalPath)
        const coverImage= await uloadCloudinary(coverLocalPath)
})

export {
    registerUser
}