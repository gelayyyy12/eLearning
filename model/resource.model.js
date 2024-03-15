const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    lessonId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
    type: String
});

module.exports = mongoose.model('Resource', resourceSchema);
