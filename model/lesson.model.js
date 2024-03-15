const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
   title : String,
   description : String
});

module.exports =  mongoose.model('Lesson', lessonSchema);

