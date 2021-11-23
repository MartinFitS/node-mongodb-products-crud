import {Schema, model} from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required:true,
            unique : true,
        },
        brand:{
            type: String,
            required:true,
        },
        price: {
            type:Number,
            required:true,
        },
        pieces: {
            type:Number,
            required:true,
        },
        img: {
             type:String,
             required:true,
        },
    },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Product", productSchema);