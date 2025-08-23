import express from 'express';
const app = express();
app.get("/test",(req, res, ) => {
  res.send({firstname:"anuskha",lastname:"dubey" });
  console.log('Request received 1');
})
// if uou wanna make them diffrecnt then write app.enable("strict routing");

app.get("/test/",(req, res, ) => {
  res.send({firstname:"anuskha",lastname:"tripathi" });
  console.log('Request received 2');
})
app.get("/test1",(req, res, ) => {
  res.send({firstname:"riddhi",lastname:"tripathi" });
  console.log('Request received 1');
})
// Using regex to match routes the new way
app.get(/^\/test.+2$/, (req, res) => {
  res.send('Matches /testANYTHING2, like /testhello2');
});

// combining the diffrecent regex features
app.use(/^\/te(bc)+st.+2$/,(req, res, ) => {
  res.send('Hello, World!');
  console.log('Request received 3');})

  app.get(/.*fly$/,(req, res, ) => {
  res.send({firstname:"riddhi",lastname:"tripathi" });
  console.log('Request received 1');
})
// query params 
app.get("/user",(req, res, ) => {
  console.log(req.query);
  res.send(req.query);
//  console.log('Request received 1');
})
// writing  a dynamic rote
app.get("/user/:userid",(req, res, ) => {
  console.log(req.params);
  res.send(req.params);
//  console.log('Request received 1');
})

 app.listen(3000, () => {
  console.log('Server is running on port 3000')
});