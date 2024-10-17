const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const FreelanceJob = require('../models/FreelancingJob');

router.post('/freelanceJob', async (req, res) => {
    const { jobTitle, description, selectedSkills, fileList, budget, deadline, userId } = req.body;
console.log({jobTitle, description, selectedSkills, fileList, budget, deadline, userId})
    if (!jobTitle || !description || !selectedSkills || !budget || !deadline || !userId) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const newJob = new FreelanceJob({
            jobTitle,
            description,
            selectedSkills,
            fileList,
            budget,
            deadline,
            postedBy: userId
        });

        const savedJob = await newJob.save();
        return res.status(200).json({ message: "Freelance Job posted successfully", job: savedJob });
    } catch (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Failed to post job. Please try again later.' });
    }
});

router.get('/getAllFreelance', async (req, res) => {
    try {
        const jobs = await FreelanceJob.find({}).populate('postedBy', 'username');
        return res.status(200).json(jobs);
    } catch (error) {
        console.error("Error fetching jobs:", error.message);
        return res.status(500).json({ msg: "Error occurred while fetching jobs", error: error.message });
    }
});

module.exports = router;
