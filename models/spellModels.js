const db = require('../dbConfig');

module.exports = {
    addSpells,
    findAllSpells,
    findSpellsByLevel,
    findSpellById,
    updateSpell,
    deleteSpell
};
// ----------------Admin
// Adds array to Spells
async function addSpells (allSpells) {
    return await db('spells').insert(allSpells, ['id', 'name']);
}

// View all Spells
function findAllSpells () {
    return db('spells')
        .select('id','name');
}

// View all Spells of given level (0-9)
function findSpellsByLevel (level) {
    return db('spells')
        .where({ level: level });
}

// View one Spell by its ID
function findSpellById (id) {
    return db('spells')
        .where({ id });
}

// Update one Spell by its ID
function updateSpell (id, changes) {
    return db('spells')
        .where({ id })
        .update(changes)
        .then(() => {
            return findSpellById(id)
        });
}

// Delete one spell by its ID
function deleteSpell (id) {
    return db('spells')
        .where({ id })
        .del();
}