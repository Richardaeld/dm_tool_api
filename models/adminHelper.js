const db = require('../dbConfig');

module.exports = {
    addUser,
    findUserByUsername,
    // findAllUsers
    find
}

async function addUser(user) {
    return await db('admin').insert(user, ['id', 'username']);
}

function findUserByUsername(username) {
    return db('admin').where({username}).first();
}

// function findAllUsers() {
function find() {
    return db('admin')
}