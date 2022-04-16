/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('users' , tbl => {
        tbl.increments();
        tbl.text('name', 50)
            .notNullable();
        tbl.timestamps(true, true);
  })

    .createTable('messages', tbl => {
        tbl.increments();
        tbl.string('sender')
            .notNullable()
            .index();
        tbl.text('text')
            .notNullable()
            tbl.timestamps(true, true);
        tbl.integer('users_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('messages')
    .dropTableIfExists('users');
};