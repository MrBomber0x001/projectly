import { Project } from '../models/Project.js'
import { Task } from '../models/Task.js';
import { Op } from 'sequelize';


export const createProject = async (req, res, next) => {
    const { name, priority, description } = req.body;
    console.log(req.user)
    const { id } = req.user
    const newProject = await Project.create({
        name,
        description,
        priority,
        userId: id
    })

    res.json(newProject)
}

export const getProject = async (req, res, next) => {
    const { id } = req.params;
    const project = await Project.findOne({
        where: {
            id
        }
    })

    res.json(project);
}

export const getAllProjects = async (req, res, next) => {
    const projects = await Project.findAll();
    res.json(projects)
}
export const deleteProject = async (req, res, next) => {

    const deletedProject = await Project.destroy({
        where: {
            [Op.and]: [
                { id: req.params.id },
                { userId: req.user.id }
            ]
        }
    })
    if (deleteProject <= 0) {
        return res.json({ success: false, msg: "Error deleting a project" });
    }

    res.json(deletedProject)
}

export const updateProject = async (req, res, next) => {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;

    await project.save();
    res.json(project)
}
/**
 * @desc Get all [tasks] under a project
 * @param (id) project Id
 * @route GET /projects/:id/tasks
 * @access public 
 */
export const getProjectTasks = async (req, res, next) => {
    try {
        const { id } = req.params
        const tasks = await Task.findAll({
            where: {
                projectId: id
            }
        })
        res.json(tasks)
    } catch (error) {
        res.json({ msg: error.message });
    }
}