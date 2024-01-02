const mongoose = require("mongoose");
const expertSchema = new mongoose.Schema(
    {
        userId:{
            type : String,
            required : true,

        },
        firstName : {
            type : String,
            required : true,

        },
        lastName : {
            type : String,
            required : true,
        },
        phoneNumber : {
            type : String,
            required : true,

        },
        website : {
            type : String ,
            required : true,
        },
        adress: {
            type : String,
            required : true,
        },
        specialization : {
            type : String,
            required : true,
        },
        experience : {
            type : String ,
            required : true,
        },
        feePerCunsultation : {
            type : Number,
            required : true,
        },
        timings:{

            type: Array,
            required: true,

        },
           
        status:{
            type: String,
            default : "peding",
        }
    },
    {
        timestamps : true,
    }
);

const expertModel = mongoose.model("expert",expertSchema);
module.exports = expertModel;