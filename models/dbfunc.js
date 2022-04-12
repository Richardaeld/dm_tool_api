// Where knex queries are written
const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);


module.exports = {
    add,
    find,
    findById,
    remove,
    update,
    addMany
}

// add, find, findbyid, delete, update
// add -- post, insert
async function add (lesson) {
    const [id] = await db("users").insert(lesson)
    console.log(id)
    return id
}

async function addMany (buttons) {
    const [id] = await db('diceButtons').insert(buttons)
    return (
        id,
        db('diceButtons')
        .where({id})
        .first()
    )

}


// get -- find
function find () {
    return db('users')
}

// get by id -- find
async function findById(id) {
    return db('users')
    .where({ id })
    .first()
}

// delete -- 
function remove (id) {
    return db('users')
    .where({ id: id })
    .del();
}

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id)
        })
}

