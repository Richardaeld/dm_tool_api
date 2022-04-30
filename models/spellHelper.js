const db = require('../dbConfig');

module.exports = {
    addSpells,
    findAllSpells,
    findSpellsByLevel,
    findSpellByName
}
// -----------------------------------DB calls for Auth
async function addSpells (allSpells) {
    return await db('spells').insert(allSpells, ['id', 'name'])
}

// -----------------------------------DB calls for Spells

function findAllSpells () {
    return db('spells')
        .select('name')
}

function findSpellsByLevel (level) {
    return db('spells')
        .where({ level })
}

function findSpellByName (name) {
    return db('db')
        .where({ name })
}