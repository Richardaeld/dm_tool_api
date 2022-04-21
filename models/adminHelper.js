const db = require('../dbConfig');

// Has two exports authRoutes AND adminRoutes
module.exports = {
    addUser,
    findUsername,
    findAll
}

async function addUser(user) {
    return await db('admin').insert(user, ['id', 'username']);
}

function findUsername(username) {
    return db('admin').where({username}).first();
}

function findAll() {
    return db('admin')
}