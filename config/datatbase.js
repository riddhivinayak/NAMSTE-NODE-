import mongoose from 'mongoose';
const connectDB = async () => {
    await mongoose.connect("mongodb+srv://riddhivinayak001:5Cpn6L33o2sMKsmJ@mastetest1.lgurj.mongodb.net/devTinder");
};// writing a name infornt of the url connects to specifc database if not present then it creates a new one
 
export default connectDB;
// we will not connext to database in this file we will do it in server.js file