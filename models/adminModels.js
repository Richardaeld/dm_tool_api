const db = require('../dbConfig');

// Has two exports authRoutes AND adminRoutes
module.exports = {
    addUser,
    findUsername,
    findAll
};
// ----------------Admin
// Adds Admin
async function addUser(user) {
    return await db('admin').insert(user, ['id', 'username']);
}

// Finds one Admin by username
function findUsername(username) {
    return db('admin').where({username}).first();
}

// Finds all Admins
function findAll() {
    return db('admin');
}