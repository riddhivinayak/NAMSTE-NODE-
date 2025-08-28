export const adminauth =(req, res, next) => {
  const isadmin = "true";
  console.log("admin auth middleware called");
  // we check if the user is admin or not
  // if it is not we  send the response from here it self 
  if (isadmin === "flase") {
    res.status(401).send('You are not authorized to view this data');
  }
  else{ next(); } // if it is true we call next to move to the next handler
  
};
export const userauth =(req, res, next) => {
  const isadmin = "true";
  console.log("user auth middleware called");
  // we check if the user is admin or not
  // if it is not we  send the response from here it self 
  if (isadmin === "flase") {
    res.status(401).send('You are not authorized to view this data');
  }
  else{ next(); } // if it is true we call next to move to the next handler
  
};