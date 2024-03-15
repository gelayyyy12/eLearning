const User = require('../model/user.model');

const getAllUsers = async (req, res) => {
  const users = await User.find()
    .exec();

  res.json(users);
};

const getUser = async (req, res) => {
  const user = await User.findById(req.params.id)
    .exec();

  res.json(user);
};
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json('successfully added user');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
};

const deleteUser = async (req, res) => {
  await user.findByIdAndDelete(req.params.id);
  res.send({ message: 'User deleted' });
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}; 