const db = require('../dbConfig');

module.exports = {
    addMainNav,
    viewAllMainNav,
    viewMainNav,
    viewMainAllChildren,
    addSubNav,
    viewAllSubNav,
    viewSubNav,
    viewSubAllChildren,
    addRollContent,
    viewAllRollContent,
    viewRollContent
}

// Has two exports buttonRoutes AND authButtonRoutes

// insert main_nav_buttons sub_nav_buttons sub_nav_roll_content

// ----------------Main Nav
async function addMainNav(buttons) {
    return await db('main_nav_buttons').insert(buttons, ['id', 'name'])
}

function viewAllMainNav() {
    return db('main_nav_buttons')
}

function viewMainNav (id) {
    return db('main_nav_buttons').where({ id }).first();
}

// return db('sub_nav_buttons').where({ parent_foreign_key: id })
function viewMainAllChildren (parent_foreign_key) {
    return db('main_nav_buttons')
    .fullOuterJoin('sub_nav_buttons', 'main_nav_buttons.id', 'sub_nav_buttons.parent_foreign_key')
    // .select(
        // 'main_nav_buttons.id',
        // 'main_nav_buttons.name',
        // 'sub_nav_buttons.id',
        // 'sub_nav_buttons.name',
        // 'sub_nav_buttons.obj_name',
        // 'sub_nav_buttons.parent_foreign_key',
        // )
        .where({ parent_foreign_key })
    }
    // 'sub_nav_buttons.parent_foreign_key'

// ----------------Sub Nav
async function addSubNav(buttons) {
    return await db('sub_nav_buttons').insert(buttons, ['id', 'name'])
}

function viewAllSubNav() {
    return db('sub_nav_buttons')
}

function viewSubNav(id) {
    return db('sub_nav_buttons').where({ id }).first();
}

function viewSubAllChildren (parent_foreign_key) {
    return db('sub_nav_buttons')
    .fullOuterJoin('sub_nav_roll_content', 'sub_nav_buttons.id', 'sub_nav_roll_content.parent_foreign_key')
    .select(
        'sub_nav_roll_content.value'
    )
    .where({ parent_foreign_key: 11 })
}

// ----------------Roll Content
async function addRollContent(content) {
    return db('sub_nav_roll_content').insert(content, ['id', 'value'])
}

function viewAllRollContent() {
    return db('sub_nav_roll_content')
}

function viewRollContent(id) {
    return db('sub_nav_roll_content').where({ id }).first();
}