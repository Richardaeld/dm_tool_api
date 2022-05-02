const jwt = require('jsonwebtoken');

module.exports = user => {
    // need payload, secret, options to create token
    // Creates token
    const payload = {
        id: user.id,
        username: user.username
    }

    const secret = process.env.SECRET;

    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, secret, options)
}