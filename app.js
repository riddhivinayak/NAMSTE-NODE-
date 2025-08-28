import express from 'express';
const app = express();
import { adminauth , userauth } from './middlewares/auth.js';
// writing multiple route hndlers for some path
// now we dont want to repeat the same code for checking authentication
// we can use middleware for that
// note we generally use middleware with app.get 
// becuase we wanna handle auth for all requests

app.use('/admin', adminauth);
app.get('/admin/getalldata', (req, res) => {
  
  res.send('Here is all the data');

});


app.get('/admin/deleteuser', (req, res) => {
  // logic for checking authentication
  const isadmin = "true";
  if (isadmin === "true") {
  res.send('delete a use');
  } else { 
    res.status(401).send('You are not authorized to view this data');
  }
});
app.get('/user/getprofile', userauth, (req, res) => {
  res.send('Here is your profile');});


 app.listen(3000, () => {
  console.log('Server is running on port 3000')
});