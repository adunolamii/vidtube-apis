import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname:{
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        avatar:{
            type: String, //cloudinary URL
            required: true,
        },
        coverImage:{
            type: String, //cloudinary URL
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password:{
            type:String,
            required: [true, "password is required"]
        },
        refreshToken:{
            type:String
        }

    },
    {timestamps: true}
)
// PASSWORD ENCRPTION/ HASHING
userSchema.pre ("save", async function (next){
    if(!this.modified ("passoword"))
        return next()
    this.password = bcrypt.hash(this.password, 10)
    next()
})
//PASSWORD COMPARISM
userSchema.methods.isPasswordCorrect = async function(password){
    return await  bcrypt.compare(password, this.password)
}

// GENERATE ACCESS TOKEN
userSchema.method.generateAccessToken = function(){
    // short live access token
    jwt.sign({
        _id: this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname,
    },
process.env.ACCESS_TOKEN_SECRET,
{expiresIn: process.env.ACCESS_TOKEN_EXPIRY}
)
}




// GENERATE ACCESS REFRESH
userSchema.method.generateRefreshToken = function(){
    // short live access REFRESH
    jwt.sign({
        _id: this._id,
       
    },
process.env.REFRESH_TOKEN_SECRET,
{expiresIn: process.env.REFRESH_TOKEN_EXPIRY}
)
}

export const User = mongoose.model("User", userSchema)