const Jobs = require('../models/jobs');

// Create a new job
const createJob = async (req, res) => {
    try {
        const { id, title, type, location, description, salary, company } = req.body;
        const newJob = new Jobs({ id, title, type, location, description, salary, company });
        await newJob.save();
        res.status(201).json({
            status: true,
            message: 'Job created successfully',
            job: newJob
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}


// Get all jobs
const getAllJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find();
        res.status(200).json({
            status: true,
            message: 'Jobs fetched successfully',
            jobs
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}


// Get a single job
const getJob = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Jobs.findOne({ _id: id });
        if (!job) {
            return res.status(404).json({
                status: false,
                message: 'Job not found'
            });
        }
        res.status(200).json({
            status: true,
            message: 'Job fetched successfully',
            job
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}


// Update a job
const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, type, location, description, salary, company } = req.body;
        const job = await Jobs.findOneAndUpdate(
            { _id: id }, 
            { title, type, location, description, salary, company }, 
            { new: true }
        );
        if (!job) {
            return res.status(404).json({ 
                status: false, 
                message: 'Job not found' 
            });
        }
        res.status(200).json({ 
            message: 'Job updated successfully', 
            job: job 
        });
    } catch (error) {
        res.status(500).json({ 
            status: false,
            message: error.message 
        });
    }
}


// delete a job
const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Jobs.findOneAndDelete({ _id: id });
        if (!job) {
            return res.status(404).json({ 
                status: false, 
                message: 'Job not found' 
            });
        }
        res.status(200).json({ 
            message: 'Job deleted successfully', 
            job: job 
        });
    } catch (error) {
        res.status(500).json({ 
            status: false,
            message: error.message 
        });
    }
}

module.exports = { 
    createJob,
    getAllJobs,
    getJob,
    updateJob,
    deleteJob
}