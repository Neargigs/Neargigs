const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const rootRouter = require("./src/router/index");
const User = require('./src/models/User');
const FullTimeJob = require('./src/models/FullTimeJob');

const app = express();
app.use(bodyParser.json()); 
app.use(cors({}));

mongoose.connect('mongodb://localhost:27017/authDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

  app.get('/allUsers', async (req, res) => {
   try {
     const users = await User.find({}, '-password'); 
     res.status(200).json(users); 
   } catch (e) {
     console.error("Error fetching users:", e.message); 
     res.status(500).json({ msg: "Error occurred while fetching users", error: e.message }); 
   }
 });

 
app.use("/api/v1", rootRouter);


app.listen(8080, () => {
    console.log('Server running on port 8080');
});