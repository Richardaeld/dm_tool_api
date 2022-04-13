/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('magicSchool', tbl => {
        tbl.increments();
        tbl.string('name', 30)
            .notNullable;
    })

    .createTable('playerClasses', tbl => {
        tbl.increments();
        tbl.string('name', 30)
            .notNullable;
    })

    .createTable('tags', tbl => {
        tbl.increments();
        tbl.string('name', 20)
            .notNullable;
    })

    .createTable('level', tbl => {
        tbl.increments();
        tbl.string('name', 10)
            .notNullable;
        tbl.integer('value', 1)
            .notNullable
    })

    .createTable('castingTime', tbl => {
        tbl.increments();
        tbl.string('name', 15)
    })

    .createTable('spells', tbl => {
        tbl.increments();
        tbl.string('name', 50)
            .notNullable;
        tbl.string('range', 30)
            .notNullable;
        tbl.integer('level')
            .notNullable;
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('magicSchool')
  .dropTableIfExists('playerClasses')
  .dropTableIfExists('tags')
  .dropTableIfExists('level')
  .dropTableIfExists('castingTime')
  .dropTableIfExists('spells')

};
