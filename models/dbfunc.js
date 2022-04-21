// Where knex queries are written
// const knex = require('knex');
// const config = require('../knexfile');
// const db = knex(config.development);

const db = require('../dbConfig');


module.exports = {
    addMany

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


