const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    id: {
        type: String,
        // required: true
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    company: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        contactEmail: {
            type: String,
            required: true
        },
        contactPhone: {
            type: String,
            required: true
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);