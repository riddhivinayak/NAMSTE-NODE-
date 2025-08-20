import express from 'express';
const app = express();
app.use("/test1",(req, res, ) => {
  res.send('Hello, World!');
  console.log('Request received 1');
})
app.use("/test2",(req, res, ) => {
  res.send('Hello, World!');
  console.log('Request received 2');
})

app.use("/test3",(req, res, ) => {
  res.send('Hello, World!');
  console.log('Request received 3');})


 app.listen(3000, () => {
  console.log('Server is running on port 3000')
});