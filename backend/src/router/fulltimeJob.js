const express = require('express');
const mongoose = require('mongoose');
const FullTimeJob = require('../models/FullTimeJob'); 
const FreelanceJob = require('../models/FreelancingJob');
const router = express.Router();

router.use(express.json());
router.post('/fulltimejob', async (req, res) => {
    const {
        jobTitle,
        employmentType,
        workplaceType,
        role,
        selectedSkills,
        workExperience,
        compensationType,
        compensationMode,
        fixedCompensation,
        rangeCompensation,
        description,
        userId
    } = req.body;
    console.log(selectedSkills)


    if (!jobTitle || !employmentType || !workplaceType || !role || !selectedSkills.length || !workExperience || !compensationType || !compensationMode || !description || !userId) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    if (compensationMode === "Range" && (Number(rangeCompensation.min) >= Number(rangeCompensation.max))) {
        return res.status(400).json({ error: 'Minimum compensation must be less than maximum compensation.' });
    }

    const newJob = new FullTimeJob({
        jobTitle,
        employmentType,
        workplaceType,
        role,
        selectedSkills,
        workExperience,
        compensationType,
        compensationMode,
        fixedCompensation,
        rangeCompensation,
        description,
        postedBy: userId
    });
    

    try {
        const savedJob = await newJob.save();
        res.status(200).json({ message: 'Job posted successfully.', job: savedJob });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Failed to post job. Please try again later.' });
    }
});



router.get('/getAlljobs',async(req,res)=>{
    try{
      const jobs=await FullTimeJob.find({}).populate('postedBy', 'username');
      return res.status(200).json(jobs)
    }catch (e) {
      console.error("Error fetching users:", e.message); 
      res.status(500).json({ msg: "Error occurred while fetching Jobs", error: e.message }); 
    }
   })


   router.get('/getAlljobs/:userId',async(req,res)=>{
      
    try{
        const jobs = await FullTimeJob.find({ postedBy: req.params.userId }).populate('postedBy', 'username');
        // console.log(jobs)
        return res.status(200).json(jobs)

    }
    catch(err){
       return res.status(500).json({error:"Error in fetching jobs"})
    }
   })
   

   router.get('/jobdetails/:jobId', async (req, res) => {
    const jobId = req.params.jobId;
  
    try {
      const fulltime = await FullTimeJob.findById(jobId).populate('postedBy', 'username');
      console.log(fulltime)
      if (fulltime) {
        return res.status(200).json(fulltime);
      }
  
      const freelance = await FreelanceJob.findById(jobId).populate('postedBy', 'username');
      if (freelance) {
        return res.status(200).json(freelance);
      }
  
      return res.status(404).json({ message: "Job not found" });
  
    } catch (error) {
      console.error('Error fetching job details:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  });
  
module.exports = router;
