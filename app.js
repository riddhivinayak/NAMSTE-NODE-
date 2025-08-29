import express from 'express';
const app = express();
import connectDB from './config/datatbase.js';
import Usermodel from './models/user.js';
app.post("/signup", async  (req, res) => {
  
  // creating a new instance of user model
  const user = new Usermodel({
    firstName:"akshay",
    lastName:"sanni",
    emailId:"akshay sani@gmail.com"
  });
  try{
      res.send("user signed up successfully");
await user.save() // it returns a promise and the user will be saved in the database
  }catch(err){
    console.log(err);}

 
})



connectDB()
.then(() => {
    console.log("Database connected");
     app.listen(3000, () => {
  console.log('Server is running on port 3000')
});
})
.catch((err) => {   
    console.log("Database connection failed");
    console.log(err);
});
