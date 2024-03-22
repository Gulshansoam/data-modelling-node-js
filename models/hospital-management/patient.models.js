import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    patientName:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    diagnosedWith:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    gender:{
        type:String,
        enum:['M','F', 'O'],
        required: true
    },
    hospitalAdmittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    }
},{timestamps: true})

export const Patient = mongoose.model('Patient', patientSchema)