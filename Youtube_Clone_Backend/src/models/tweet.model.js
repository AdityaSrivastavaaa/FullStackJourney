import mongoose ,{Schema}from "mongoose"

const tweetSchema = new Schema(
    {
        owner:{
            types:Schema.Types.ObjectId,
            ref:"User"
        },
        conten:{
            type:String,
            required:true
        }
    }
    ,{timestamps:true}
)


export const Tweet = mongoose.model("Tweet",tweetSchema)