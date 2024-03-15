const Lesson = require('../model/lesson.model');

const getAllLessons = async (req, res) => {
  const lessons = await Lesson.find()
    .exec();

  res.json(lessons);
};

const getLesson = async (req, res) => {
  const lesson = await Lesson.findById(req.params.id)
    .exec();

  res.json(lesson);
};
const createLesson = async (req, res) => {
  try {
    const lesson = new Lesson(req.body);
    await lesson.save();
    res.status(201).json('successfully added lesson');
  } catch (error) {
    console.error('Error creating lesson:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
const updateLesson = async (req, res) => {
  const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(lesson);
};

const deleteLesson = async (req, res) => {
  await Lesson.findByIdAndDelete(req.params.id);
  res.send({ message: 'Lesson deleted' });
};

module.exports = {
  getAllLessons,
  getLesson,
  createLesson,
  updateLesson,
  deleteLesson,
}; 