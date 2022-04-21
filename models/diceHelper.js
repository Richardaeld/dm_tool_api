const db = require('../dbConfig');

module.exports = {
    addDice,
    findAllDice
}

async function addDice (dice) {
    return await db('dice_buttons').insert(dice, ['id', 'value'])
}

function findAllDice () {
    return db('dice_buttons')
}