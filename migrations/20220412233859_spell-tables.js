/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('magic_school', tbl => {
        tbl.increments();
        tbl.string('name', 30)
            .notNullable;
    })

    .createTable('player_classes', tbl => {
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

    .createTable('casting_time', tbl => {
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
            .references('id')
            .inTable('level')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.string('duration', 30)
            .notNullable;
        tbl.string('casting_time', 100)
            .notNullable;
        tbl.string('casting_time_reaction_condition', 100);
        tbl.boolean('ritual')
            .notNullable;
        tbl.boolean('component_material')
            .defaultTo(false);
        tbl.boolean('component_somatic')
            .defaultTo(false);
        tbl.boolean('component_verbal')
            .defaultTo(false);
        tbl.string('component_material_description', 100);
        tbl.string('tags', 100); // redundent
        tbl.string('type', 50); //redundent
        tbl.string('classes', 50)
        tbl.string('school', 30);
        tbl.text('description')
            .notNullable;
        tbl.text('higher_levels')
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('magic_school')
  .dropTableIfExists('player_classes')
  .dropTableIfExists('tags')
  .dropTableIfExists('level')
  .dropTableIfExists('casting_time')
  .dropTableIfExists('spells')

};
