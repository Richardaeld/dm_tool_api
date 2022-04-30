const db = require('../dbConfig');

module.exports = {
    addSpells,
    findSpellsByLevel,
    findSpellByName
}
// -----------------------------------DB calls for tags many to many


// -----------------------------------DB calls for class
function findClasses (id) {
    return db('player_class')
}

async function addClasses (classes) {
// Original --------------- insert method with SQLite3
// const [id] = await db('player_class').insert(classes)
// return id

// PostgreSQL ---------------- insert method
return await db('player_class').insert(classes, ['id'])
}

// -----------------------------------DB calls for Spells


async function addSpells (allSpells) {
    return await db('spells').insert(allSpells, ['id', 'name'])
}


// function findSpells () {
function find () {
    return db('spells')
}