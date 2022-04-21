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


