const Enrollment = require('../model/enrollment.model');

const getAllEnrollments = async (req, res) => {
  const enrollments = await Enrollment.find()
    .exec();

  res.json(enrollments);
};

const getEnrollment = async (req, res) => {
  const enrollment = await Enrollment.findById(req.params.id)
    .exec();

  res.json(enrollment);
};
const createEnrollment = async (req, res) => {
  try {
    const enrollment = new Enrollment(req.body);
    await enrollment.save();
    res.status(201).json('successfully added enrollment');
  } catch (error) {
    console.error('Error creating enrollment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
const updateEnrollment = async (req, res) => {
  const enrollment = await Enrollment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(enrollment);
};

const deleteEnrollment = async (req, res) => {
  await Enrollment.findByIdAndDelete(req.params.id);
  res.send({ message: 'Enrollment deleted' });
};

module.exports = {
  getAllEnrollments,
  getEnrollment,
  createEnrollment,
  updateEnrollment,
  deleteEnrollment,
}; 