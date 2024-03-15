const Role = require('../model/role.model');

const createRole = async (req, res) => {
    try {
        const { Instructor_Name } = req.body;

        if (!Instructor_Name ) {
            return res.status(400).json({ error: 'Role name is required' });
        }

        const existingRole = await Role.findOne({ Instructor_Name });
        if (existingRole) {
            return res.status(400).json({ error: 'Role name is already in use' });
        }

        const role = new Role({ Instructor_Name });
        await role.save();

        res.status(201).json({ message: 'Role Successfully Added', role });
    } catch (error) {
        console.error('Error creating Role:', error);
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = {
    createRole,
    // Other role controller functions...
};