const express=require('express');
const Chat = require('../models/Chat');
const router=express.Router();



router.get('/getAllchats', async (req, res) => {
    try {
        const chat= await Chat.find({})
        return res.status(200).json(chat);
    } catch (error) {
        console.error("Error fetching jobs:", error.message);
        return res.status(500).json({ msg: "Error occurred while fetching gigs", error: error.message });
    }
});



router.get('/chatdetails/:jobId/chat/:chatId', async (req, res) => {
    const jobId = req.params.jobId;
    const chatId=req.params.chatId;
  
    try {
      const chat = await Chat.findById(chatId)
      console.log(chat)
      if (chat) {
        return res.status(200).json(chat);
      }
  
 
      return res.status(404).json({ message: "Job not found" });
  
    } catch (error) {
      console.error('Error fetching job details:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  });
  
  
  
  module.exports=router;