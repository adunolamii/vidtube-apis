import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subcriber:{
        type: Schema.Types.ObjectId, //one who is subscribing
        ref: "User"
    },
    channel:{
        type: Schema.Types.ObjectId, // One to whom `subsriber` is SUBSCRIBING
        ref: "User"
    }
})

{timestamps: true}

export const Subscription  = mongoose.model('Subscription', subscriptionSchema)