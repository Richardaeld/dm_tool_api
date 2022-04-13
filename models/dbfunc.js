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
    addMany,
    addManySpells,
    findSpells,
    findLevels,
    findLevel
}

// add, find, findbyid, delete, update
// add -- post, insert
async function add (lesson) {
    const [id] = await db('users').insert(lesson)
    console.log(id)
    return id
}

function findLevel (id) {

    return db('level')
    .where({id})
    .first();
}

function findLevels () {
    return db('level')
}

async function addLevel (name, value) {
    const level= {
        id : value,
        name: name,
        value: value
    }
    const [id] = await db('level').insert(level)
    return id
}

async function addManySpells (spells) {

    spells.map(spell => {
        if(!(typeof(parseInt(spell.level)))){
            var level = parseInt(spell.level)
        } else {
            var level = 0
        }
        level = 1
        console.log(findLevel(level).length , "im console")

        // console.log(spell.level, "map")
        // console.log(findLevel(spell.level))
        if (!findLevel(spell.level)) {
            console.log("do something")
            if (!(typeof(parseInt(spell.level) == NaN))) {
                spell.level = parseInt(spell.level);
                addLevel(spell.level)
            } else {
                addLevel(spell.level)
            }
        } else {
            console.log("do nothing")
        }
    })
    // if (!(typeof(parseInt(spells.level) == NaN))) {
    //     spells.level = parseInt(spells.level);
    // }


    const [id] = await db('spells').insert(spells)

    return (
        id,
        db('spells')
        .where({id})
        .first()
    )
}


function findSpells () {
    return db('spells')
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

