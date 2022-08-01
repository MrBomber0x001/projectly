import { Project } from '../models/Project.js'
import { User } from '../models/User.js'
export const deleteUser = (req, res, next) => {

}
/**
 * Get projects for user [Id]
 * @route GET /users/:id/projects
 * @param {userId} id   
 */


export const getUserProjects = async (req, res, next) => {
    const { id } = req.params
    try {
        const projects = await Project.findAll({
            where: {
                userId: id
            }
        })
        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message })
    }
}
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        console.log(users);
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}

export const getUser = (req, res, next) => {
    try {

    } catch (error) {

    }
}