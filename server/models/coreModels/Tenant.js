import mongoose from "mongoose";

const tenantSchema = new mongoose.Schema({
    removed: {
        type: Boolean,
        default: false,
    },
    enabled: {
        type: Boolean,
        default: false,
    },
    tenantId: {
        type: String,
        require: true,
        unique: true,
    },
    companyName: {
        type: String,
    },
    logo: {
        type: String,
    },
    panNo:{
        type:String,
        unique:true
    },
    gstNo:{
        type:String,
        unique:true
    },
    industry: {
        type: String,
    },
    address: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        pinCode: {
            type: String,
        },
    },
    bankDetails: {
        bankName: {
            type: String,
        },
        accountNo: {
            type: String,
        },
        branch: {
            type: String,
        },
        ifscCode: {
            type: String,
        },
    },
    email: {
        type: String,
        unique:true
    },
    phone: {
        type: Number,
        unique:true
    },
    templateId:{
        type:String,
    }
});

export default mongoose.model("tenant", tenantSchema);
