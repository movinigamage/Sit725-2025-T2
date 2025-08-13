const projectService = require('../services/projectservice');

// Controller calls service to get all projects
const getAllProjects = async (req, res) => {
    try {
        const projects = await projectService.getAllProjects();
        res.json({ statusCode: 200, data: projects, message: "Success" });
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: "Error", error: error.message });
    }
};

module.exports = {
    getAllProjects
};
