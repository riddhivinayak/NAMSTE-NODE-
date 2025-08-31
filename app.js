import express from 'express';
const app = express();
import connectDB from './config/datatbase.js';
import Usermodel from './models/user.js';
app.use(express.json()); // to parse json data
app.post("/signup", async  (req, res) => {
  
  // creating a new instance of user model
  const user = new Usermodel(req.body);
  try{
     console.log(req.body);
      res.send("user signed up successfully");
await user.save() // it returns a promise and the user will be saved in the database
  }catch(err){
    console.log(err);}
});
// how to get one data from the databse 
app.get("/user", async (req, res) => {
  const email=req.body.emailId; // to get the email from the query parameters
 try{
   const user = await Usermodel.find({emailId : email});
   if(user.length===0) {
   res.status(400).send("User not found");
   }else{
  res.send(user);
   }
   
}catch(err){
  res.status(400).send("User not found");

}});
// writing an api to get all users from the database  
// feeed api
app.get("/feed", async (req, res) => {
  try{
    const users = await Usermodel.find({});// passing empty object to find all users
    res.send(users);
  }catch(err){
    res.status(400).send("Error while fetching users");
  }

});
  // cresating an delete api
app.delete("/user", async (req, res) => {
  const userId = req.body.userId; // to get the userid from the query parameters
 try{
   const user =  await Usermodel.findByIdAndDelete(userId);
  console.log(user);
 res.send("User deleted successfully");
}catch(err){
  res.status(400).send("User not found");
}});

//making an update paytch api
app.patch("/user", async (req, res) => {
  const userId = req.body.userId; // to get the userid from the query parameters
  const updateData = req.body.updateData; // to get the update data from the request body
 try{
   const user =  await Usermodel.findByIdAndUpdate(userId, updateData);
  console.log(user);
 res.send("User updated successfully");
}catch(err){
  res.status(400).send("User not found");
}});

// connect to database and then start the server

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
