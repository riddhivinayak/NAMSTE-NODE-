import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
//import {username,pass} from './password.js';
const connectDB = async () => {
 await mongoose.connect(process.env.MONGO_URI);
};// writing a name infornt of the url connects to specifc database if not present then it creates a new one
 
export default connectDB;
// we will not connext to database in this file we will do it in server.js file