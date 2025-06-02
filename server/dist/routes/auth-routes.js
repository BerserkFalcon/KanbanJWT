import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const secret = process.env.JWT_SECRET_KEY || 'defaultsecret';
        const token = jwt.sign({ username: user.username }, secret, { expiresIn: '2h' });
        return res.json({ token });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
const router = Router();
// POST /login - Login a user
router.post('/login', login);
export default router;
