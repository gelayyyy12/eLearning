const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    
    completedLesson : String, 
    // Add other fields as needed
});

module.exports =  mongoose.model('Progress', progressSchema);