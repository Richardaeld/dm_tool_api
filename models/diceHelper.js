const db = require('../dbConfig');

module.exports = {
    addDice,
    findAllDice
}

async function addDice (dice) {
    return await db('dice').insert(dice, ['id', 'value'])
}

function findAllDice () {
    return db('dice')
}