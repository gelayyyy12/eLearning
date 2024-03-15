const Resource = require('../model/resource.model');

const getAllResources = async (req, res) => {
  const resources = await Resource.find()
    .exec();

  res.json(resources);
};

const getResource = async (req, res) => {
  const resource = await Resource.findById(req.params.id)
    .exec();

  res.json(resource);
};
const createResource = async (req, res) => {
  try {
    const resource = new Resource(req.body);
    await resource.save();
    res.status(201).json('successfully added to resource');
  } catch (error) {
    console.error('Error creating resource:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
const updateResource = async (req, res) => {
  const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(resource);
};

const deleteResource = async (req, res) => {
  await resource.findByIdAndDelete(req.params.id);
  res.send({ message: 'Resource deleted' });
};

module.exports = {
  getAllResources,
  getResource,
  createResource,
  updateResource,
  deleteResource,
}; 