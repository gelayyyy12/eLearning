const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    enrollmentDate: Date,
    enrollmentStatus: String


});

module.exports = mongoose.model('Enrollment', enrollmentSchema);