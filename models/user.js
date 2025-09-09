import mongoose from 'mongoose';
import validator from 'validator';
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName: String,
    emailId: 
    {    type: String,
          required: true,
          lowercase: true,
          unique: true,
          validator(value) {
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid");
            }}
       
    },
    dateOfBirth: String,        
    gender :{type: String
        ,
        validate(value) {
            if(!["male","female","other"].includes(value.toLowerCase())){
                throw new Error("gender data nort valid")   
        }
    }
    
}
    ,
    skilles:{
        type: [String],
        default: "this is  default value for  FOR JANE/JHON DOE"
    }
    ,
    photourl:
    {type: String,
    default: "https://tse2.mm.bing.net/th/id/OIP.9vm7eDbnZS6Yy4ETUfEBAgHaGw?pid=Api&P=0&h=220",
     validate(value) {
        if(!validator.isURL(value)){
            throw new Error("Photo url is not valid");
        }
    }
    }
    ,
     age:{
        type: Number
      
     },password:{
        type: String,
        required: true,
        minlength: 6,
        validate(value) {
            if(!validator.isStrongPassword(value)){
                throw new Error("Password is not strong enough");
            }
}}
}
,{
    timestamps: true
});

// create a model
const Usermodel = mongoose.model('User', userSchema);
export default Usermodel;