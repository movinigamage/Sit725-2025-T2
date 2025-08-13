const Project = require('../models/project');

// Get all projects from DB
const getAllProjects = async () => {
    return await Project.find({});
};

// (Optional) Add more operations later: createProject, deleteProject, etc.

module.exports = {
    getAllProjects
};
