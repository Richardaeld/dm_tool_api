const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secret = process.env.SECRET;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'Invalid token' });
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'No token received' });
    }
    // console.log('session object>>>>>', req.session, "<<<---->>>>", req.session.user)
    // if (req.session && req.session.user) {
    //     next();
    // } else {
    //     res.status(401).json({ message: 'Must be logged in to proceed.'})
    // }
};