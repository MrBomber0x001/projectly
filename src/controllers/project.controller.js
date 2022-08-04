import { Project } from '../models/Project.js'
import { Task } from '../models/Task.js';
import { Op } from 'sequelize';


export const createProject = async (req, res, next) => {
    const { name, priority, description } = req.body;
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
 * @route GET /projects/:projectId/tasks
 * @access public 
 */
export const getProjectTasks = async (req, res, next) => {
    try {
        const { projectId } = req.params
        const tasks = await Task.findAll({
            where: {
                projectId
            }
        })
        res.json({ success: true, tasks })
    } catch (error) {
        res.json({ msg: error.message });
    }
}

export const createList = async (req, res, next) => {
    const validateTitle = new Value(req.body.title);
    validateTitle.require('title');
    validateTitle.maxLength(60);

    let todos = req.body.todos;
    /**
     * todos: [
     * 	{description: "Do your homework", done: false},
     * 	{description: "Play football", done: false}
     * ]
     * 
     */
    // validaiton

    const newProject = await Project.create({
        title: req.body.title,
        user: req.user.id
    })
    tasks.forEach(async (task) => {
        const validateTask = new Validation(task);
        validateTask.require('description', 'done');

        validateTask.validator.description.maxLength(5000);
        validateTask.validator.done.isBoolean();

        await Task.create({
            description,
            done,
            projectId: newProject.id
        })
    });



    res.status(201).json({
        success: true,
        message: `projet created successfully`
    })
}