const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const FullTimeJob = require('../models/FullTimeJob');
const Application = require('../models/ApplicationSchema');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads')); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); 
    },
});

const upload = multer({ storage: storage });

router.post('/applyjob', upload.single('cvFile'), async (req, res) => {
    try {
        const { jobId, applicantId, description, paymentMethod } = req.body;

        console.log("Received request with body:", req.body);
        console.log("Uploaded file details:", req.file); 

        if (!jobId || !applicantId || !description || !paymentMethod) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        if (!req.file) {
            return res.status(400).json({ error: 'CV file is required.' });
        }

        if (!mongoose.Types.ObjectId.isValid(jobId)) {
            return res.status(400).json({ error: 'Invalid jobId format.' });
        }

        const fulltimeJob = await FullTimeJob.findById(jobId); 
        const jobType = fulltimeJob ? "FullTimeJob" : "FreelanceJob";
        console.log(jobType)
        const newApplication = new Application({
            jobId,
            jobType,
            applicant: applicantId,
            description,
            paymentMethod,
            cvFile: req.file.path,
        });

        const savedApplication = await newApplication.save();
        res.status(200).json({ message: "Application submitted successfully", application: savedApplication });
    } catch (error) {
        console.error('Error submitting application:', error);
        res.status(500).json({ error: 'Failed to submit application. Please try again later.', details: error.message });
    }
});

router.get('/getAllApplication', async (req, res) => {
    try {
        const application = await Application.find({})
        return res.status(200).json(application);
    } catch (error) {
        console.error("Error fetching jobs:", error.message);
        return res.status(500).json({ msg: "Error occurred while fetching gigs", error: error.message });
    }
});





module.exports = router;
