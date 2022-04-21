exports.up = function(knex) {
    return knex.schema.createTable('dice', tbl => {
        tbl.increments();
        tbl.integer('value');
    })
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('dice')
};
