const Progress = require('../model/progress.model');

const getAllProgresses = async (req, res) => {
  const progresses = await Progress.find()
    .exec();

  res.json(progresses);
};

const getProgress = async (req, res) => {
  const progress = await Progress.findById(req.params.id)
    .exec();

  res.json(progress);
};
const createProgress = async (req, res) => {
  try {
    const progress = new Progress(req.body);
    await progress.save();
    res.status(201).json('successfully added progress');
  } catch (error) {
    console.error('Error creating progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
const updateProgress = async (req, res) => {
  const progress = await Progress.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(progress);
};

const deleteProgress = async (req, res) => {
  await Progress.findByIdAndDelete(req.params.id);
  res.send({ message: 'Progress deleted' });
};

module.exports = {
  getAllProgresses,
  getProgress,
  createProgress,
  updateProgress,
  deleteProgress,
}; 