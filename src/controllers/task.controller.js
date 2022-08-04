import { Comment } from '../models/Comment.js';
import { Task } from '../models/Task.js'


export const createTask = async (req, res, next) => {
    const { name, done, projectId } = req.body;

    const newTask = await Task.create({
        name,
        projectId,
        done
    })

    res.json(newTask)
}

export const getTask = async (req, res, next) => {
    const { id } = req.params;
    const task = await Task.findOne({
        where: {
            id
        }
    })

    res.json(task);
}

export const getAllTasks = async (req, res, next) => {
    const tasks = await Task.findAll();
    res.json(tasks)
}
export const deleteTask = async (req, res, next) => {
    const deletedTask = await Task.destroy({
        where: {
            id: req.params.id
        }
    })

    res.json(deletedTask)
}

export const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, done, projectId } = req.body;

        const task = await Task.findOne({
            where: {
                id
            }
        });
        task.set(req.body);
        await task.save();
        res.json(task)
    } catch (error) {
        return res.status(500).send(error)
    }
}
/**
 *  
 * @returns Task with it's comments 
 */
export const getTaskComment = async (req, res, next) => {
    try {
        const comments = await Task.findAll({
            where: {
                id: req.params.id
            },
            include: [{
                model: Comment
            }]
        })

        return res.status(200).json({ success: true, data: comments })
    } catch (error) {
        return res.status(500).json(error.message);
    }
}