const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    addManySpells,
    findSpells,
    findLevels,
    findLevel,
    // addManyLevels
    addLevel,
    findClasses,
    addClasses
    // updateManyToManySpells
}
// -----------------------------------DB calls for tags many to many


// -----------------------------------DB calls for class
function findClasses (id) {
    return db('player_class')
}

async function addClasses (classes) {
const [id] = await db('player_class').insert(classes)
return id
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

async function addLevel (level) {
    const [id] = await db('level').insert(level)
    return id
}


// -----------------------------------DB calls for Spells


async function addManySpells (spells) {
    const allClasses = db('player_class')
    var test = spells.map(spell => {

        // Breaks up spell casting into two fields
        if (spell.casting_time.includes(",")) {
            var spellCastingArray = spell.casting_time.split(",", 2);
            spell.casting_time = spellCastingArray[0]
            spell.casting_time_reaction_condition = spellCastingArray[1]
            console.log(spellCastingArray)
        }

        // Adds spells components into own fields and deletes original field
        spell.component_material = spell.components.material,
        spell.component_somatic = spell.components.somatic,
        spell.component_verbal = spell.components.verbal,
        spell.component_material_description = spell.components.materials_needed
        delete spell.components

        if(spell.level == 'cantrip') {
            spell.level = 0
        } else {
            spell.level = parseInt(spell.level);
        }

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