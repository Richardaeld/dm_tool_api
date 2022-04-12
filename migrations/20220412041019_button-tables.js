/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    //narrowMiss
    return knex.schema.createTable('narrowMissButtons', tbl => {
        tbl.increments();
        tbl.text('name', 50)
            .notNullable();
        tbl.text('objName', 50)
            .notNullable();
        tbl.boolean('open')
            .defaultTo(false);
    })

    .createTable('wildMagicButtons', tbl => {
        tbl.increments();
        tbl.text('name', 50)
            .notNullable();
        tbl.text('objName', 50)
            .notNullable();
        tbl.boolean('open')
            .defaultTo(false);
    })

    .createTable('magicItemButtons', tbl => {
        tbl.increments();
        tbl.text('name', 50)
            .notNullable();
        tbl.text('objName', 50)
            .notNullable();
        tbl.boolean('open')
            .defaultTo(false);
    })

    .createTable('navButtons', tbl => {
        tbl.increments();
        tbl.text('name', 50)
            .notNullable();
        tbl.text('objName', 50)
            .notNullable();
        tbl.boolean('open')
            .defaultTo(false);
    })

    .createTable('spellLevelButtons', tbl => {
        tbl.increments();
        tbl.text('name', 50)
            .notNullable();
        tbl.text('objName', 50)
            .notNullable();
        tbl.boolean('open')
            .defaultTo(false)
    })

    .createTable('diceButtons', tbl => {
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
  return knex.schema.dropTableIfExists('narrowSuccessButtons')
  .dropTableIfExists('wildMagicButtons')
  .dropTableIfExists('magicItemButtons')
  .dropTableIfExists('navButtons')
  .dropTableIfExists('spellLevelButtons')
  .dropTableIfExists('diceButtons');
};
