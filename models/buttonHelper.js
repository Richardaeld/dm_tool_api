const db = require('../dbConfig');

module.exports = {
    addMainNav,
    viewAllMainNav,
    // viewMainNav,
    addSubNav,
    viewAllSubNav,
    // viewSubNav,
    addRollContent,
    viewAllRollContent,
    // viewRollContent
}

// insert main_nav_buttons sub_nav_buttons sub_nav_roll_content

// ----------------Main Nav
async function addMainNav(buttons) {
    return await db('main_nav_buttons').insert(buttons, ['id', 'name'])
}

function viewAllMainNav() {
    return db('main_nav_buttons')
}

// ----------------Sub Nav
async function addSubNav(buttons) {
    return await db('sub_nav_buttons').insert(buttons, ['id', 'name'])
}

function viewAllSubNav() {
    return db('sub_nav_buttons')
}

// ----------------Roll Content
async function addRollContent(content) {
    return db('sub_nav_roll_content').insert(content, ['id', 'value'])
}

function viewAllRollContent() {
    return db('sub_nav_roll_content')
}