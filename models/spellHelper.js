const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    addManySpells,
    findSpells,
    findLevels,
    findLevel,
    // addManyLevels
    addLevel
}


// -----------------------------------DB calls for levels
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


// -----------------------------------DB calls for Spells


async function addManySpells (spells) {

    var test = spells.map(spell => {

        // console.log(spell.casting_time)

        if (spell.casting_time.includes(",")) {
            var spellCastingArray = spell.casting_time.split(",", 2);
            spell.casting_time = spellCastingArray[0]
            spell.casting_time_reaction_condition = spellCastingArray[1]
            console.log(spellCastingArray)
        }

        spell.component_material = spell.components.material,
        spell.component_somatic = spell.components.somatic,
        spell.component_verbal = spell.components.verbal,
        spell.component_material_description = spell.components.materials_needed
        delete spell.components
        return {...spell}
    })

    const [id] = await db('spells').insert(test)

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