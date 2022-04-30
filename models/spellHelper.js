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

// function findSpells () {
function findAllSpells () {
    return db('spells').select('name')
}