import { User } from '../models/User.js'
import bcrypt from 'bcrypt'
import { signToken } from '../utils/jwt.js';
export const signup = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    // search for the user with email
    try {
        const doesExist = await User.findOne({
            where: {
                email: email
            }
        })
        if (doesExist) {
            return res.status(400).json({ success: false, msg: "User Already registered" })
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        await newUser.save();
        const token = signToken(newUser.id);

        res.status(200).json({ success: true, data: newUser, token })
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message })
    }
}

export const login = async (req, res, next) => {
    // find user with email
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } })
        console.log(user)
        if (!user) {
            return res.status(404).json({ success: false, msg: "User is not found!" });
        }

        // check for password
        const isValid = bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(400).json({ success: false, msg: "Email/Password are invalid!" })
        }

        // sign a token 
        const token = signToken(user.id);
        res.status(200).json({ success: true, data: user, token });
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}

export const logout = async (req, res, next) => {

}