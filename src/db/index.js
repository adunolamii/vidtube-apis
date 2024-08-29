import mongoose from "mongoose";
import { DB_NAME } from '../constants.js'
import dotenv from 'dotenv'

const connectDB = async ()=>{
    try {
 const connect= await mongoose.connect("mongodb+srv://apiprofessionalproject:apiprofessionalproject@apiprofessionalproject.p6rjr.mongodb.net/apiprofessionalproject?retryWrites=true&w=majority&appName=apiprofessionalproject"
)
         console.log("connected");
        

    } catch (error) {
        console.log("error occured", error);
        
    }
}
export default connectDB

