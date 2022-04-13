/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('narrow_miss_buttons', tbl => {
        tbl.increments();
        tbl.text('name', 50)
            .notNullable();
        tbl.text('objName', 50)
            .notNullable();
        tbl.boolean('open')
            .defaultTo(false);
    })

    .createTable('wild_magic_buttons', tbl => {
        tbl.increments();
        tbl.text('name', 50)
            .notNullable();
        tbl.text('objName', 50)
            .notNullable();
        tbl.boolean('open')
            .defaultTo(false);
    })

    .createTable('magic_item_buttons', tbl => {
        tbl.increments();
        tbl.text('name', 50)
            .notNullable();
        tbl.text('objName', 50)
            .notNullable();
        tbl.boolean('open')
            .defaultTo(false);
    })

    .createTable('nav_buttons', tbl => {
        tbl.increments();
        tbl.text('name', 50)
            .notNullable();
        tbl.text('objName', 50)
            .notNullable();
        tbl.boolean('open')
            .defaultTo(false);
    })

    .createTable('spell_level_buttons', tbl => {
        tbl.increments();
        tbl.text('name', 50)
            .notNullable();
        tbl.text('objName', 50)
            .notNullable();
        tbl.boolean('open')
            .defaultTo(false)
    })

    .createTable('dice_buttons', tbl => {
        tbl.increments();
        tbl.integer('name', 5)
            .notNullable();
        tbl.boolean('open')
            .defaultTo(false);
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('narrow_miss_buttons')
  .dropTableIfExists('wild_magic_buttons')
  .dropTableIfExists('magic_item_buttons')
  .dropTableIfExists('nav_buttons')
  .dropTableIfExists('spell_level_buttons')
  .dropTableIfExists('dice_buttons');
};
