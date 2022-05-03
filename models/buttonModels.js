const db = require('../dbConfig');

module.exports = {
    addMainNav,
    viewAllMainNav,
    viewMainNav,
    viewMainAllChildren,
    updateMainNav,
    deleteMainNav,
    addSubNav,
    viewAllSubNav,
    viewSubNav,
    viewSubAllChildren,
    updateSubNav,
    deleteSubNav,
    addRollContent,
    viewAllRollContent,
    viewRollContent,
    updateRollContent,
    deleteRollContent
};

// Has two exports buttonRoutes AND authButtonRoutes

// ----------------Nav Names
// Add array to Nav Names
async function addMainNav(buttons) {
    return await db('main_nav_buttons').insert(buttons, ['id', 'name']);
}

// View all Nav Names
function viewAllMainNav() {
    return db('main_nav_buttons');
}

// View Nav Name by its ID
function viewMainNav (id) {
    return db('main_nav_buttons').where({ id }).first();
}

// View all children of Nav Name
function viewMainAllChildren (parent_foreign_key) {
    return db('main_nav_buttons')
        .fullOuterJoin('sub_nav_buttons', 'main_nav_buttons.id', 'sub_nav_buttons.parent_foreign_key')
        .where({ parent_foreign_key });
    }

// Update single Nav Name by ID
function updateMainNav (id, changes) {
    return db('main_nav_buttons')
        .where({ id })
        .update(changes)
        .then(() => {
            return viewMainNav(id);
        });
}

// Delete single Nav Name by ID
function deleteMainNav (id) {
    return db('main_nav_buttons')
        .where({ id })
        .del();
}

// ----------------Sub Nav Names
// Add array to Sub Nav Names
async function addSubNav(buttons) {
    return await db('sub_nav_buttons').insert(buttons, ['id', 'name']);
}

// View all Sub Nav Names
function viewAllSubNav() {
    return db('sub_nav_buttons');
}

// View one Sub Nav by its ID
function viewSubNav(id) {
    return db('sub_nav_buttons').where({ id }).first();
}

// View all children of Sub Nav
function viewSubAllChildren (sub_foreign_key) {
    return db('sub_nav_buttons')
        .fullOuterJoin('sub_nav_roll_content', 'sub_nav_buttons.id', 'sub_nav_roll_content.sub_foreign_key')
        .select(
            'sub_nav_roll_content.value'
        )
        .where({ sub_foreign_key });
}

// Update single Sub Nav by ID
function updateSubNav (id, changes) {
    return db('sub_nav_buttons')
        .where({ id })
        .update(changes)
        .then(() => {
            return viewSubNav(id);
        });
}

// Delete single Sub Nav by ID
function deleteSubNav (id) {
    return db('sub_nav_buttons')
        .where({ id })
        .del();
}

// ----------------General Content
// Add array to General Content
async function addRollContent(content) {
    return db('sub_nav_roll_content').insert(content, ['id', 'value']);
}

// View all General Content
function viewAllRollContent() {
    return db('sub_nav_roll_content');
}

// View one General Content by its ID
function viewRollContent(id) {
    return db('sub_nav_roll_content').where({ id }).first();
}

// Update single General Content by its ID
function updateRollContent(id, changes) {
    return db('sub_nav_roll_content')
        .where({ id })
        .update(changes)
        .then(() => {
            return viewAllRollContent(id);
        });
}

// Delete single General Content by its ID
function deleteRollContent (id) {
    return db('sub_nav_roll_content')
        .where({ id })
        .del();
}