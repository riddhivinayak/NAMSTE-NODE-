import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    firstName:{type: String},
    lastName: String,
    emailId: String,
    dateOfBirth: String,        
    gender :{type: String}
});

// create a model
const Usermodel = mongoose.model('User', userSchema);
export default Usermodel;