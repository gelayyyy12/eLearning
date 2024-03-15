const Course = require('../model/course.model');

const getAllCourses = async (req, res) => {
  const courses = await Course.find()
    .exec();

  res.json(courses);
};

const getCourse = async (req, res) => {
  const course = await Course.findById(req.params.id)
    .exec();

  res.json(course);
};
const createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json('successfully added course');
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
const updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(course);
};

const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.send({ message: 'Course deleted' });
};

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
}; 