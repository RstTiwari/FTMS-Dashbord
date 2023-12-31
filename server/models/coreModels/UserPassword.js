import mongoose from 'mongoose';
import bcrypt from "bcryptjs"
const Schema = mongoose.Schema;


const UserPaswordSchema = new Schema ({
    removed: {
        type: Boolean,
        default: false,
      },
      user: { type: mongoose.Schema.ObjectId, ref: 'Admin', required: true, unique: true },
      password: {
        type: String,
        required: true,
      },
      salt: {
        type: String,
        required: true,
      },
      emailOtp: Number,
      resetOtp: Number,
      emailVerified: {
        type: Boolean,
        default: false,
      },
      authType: {
        type: String,
        default: 'email',
      },
      loggedSessions: {
        type: [String],
        default: [],
      }
})

UserPaswordSchema.method.genrateHash = function (salt,password){
   return bcrypt.hashSync(salt,password)
}

UserPaswordSchema.method.validPassword = function (salt,userPassword){
   return bcrypt.compareSync(salt +userPassword , this.password)
}

export default  mongoose.model("UserPassword", UserPaswordSchema)