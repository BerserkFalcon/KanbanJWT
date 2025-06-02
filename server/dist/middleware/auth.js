import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    // Verify the token exists and add the user data to the request object
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const secret = process.env.JWT_SECRET_KEY || 'defaultsecret';
        const decoded = jwt.verify(token, secret);
        req.user = { username: decoded.username };
        next();
        return;
    }
    catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};
