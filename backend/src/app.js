const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const rootRouter = require("./router/index");

const app = express();
app.use(bodyParser.json()); 
app.use(cors({}));

mongoose.connect('mongodb://localhost:27017/authDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.get('/test', (req, res) => {
   try {
      res.send('Server is running!');
   } catch (e) {
      res.send("Error occurred");
   }
});

app.use("/api/v1", rootRouter);

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
