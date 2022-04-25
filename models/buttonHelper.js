const db = require('../dbConfig');

module.exports = {
    addMainNav,
    viewAllMainNav,
    viewMainNav,
    viewMainAllChildren,
    addSubNav,
    viewAllSubNav,
    viewSubNav,
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

function viewMainAllChildren (id) {
    return db('sub_nav_buttons')
}

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