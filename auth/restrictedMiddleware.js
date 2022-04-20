module.exports = (req, res, next) => {
    console.log('session object>>>>>', req.session, "<<<---->>>>", req.session.user)
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ message: 'Must be logged in to proceed.'})
    }
};