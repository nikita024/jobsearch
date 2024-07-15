const express = require('express');
const { createJob, getAllJobs, getJob, updateJob, deleteJob } = require('../controllers/jobs');
const router = express.Router();

router.post('/add', createJob);
router.get('/all', getAllJobs);
router.get('/:id', getJob);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

module.exports = router