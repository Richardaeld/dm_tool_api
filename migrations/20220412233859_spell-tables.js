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

    .createTable('player_class', tbl => {
        tbl.increments();
        tbl.string('name', 15)
            .notNullable;
    })

    .createTable('level', tbl => {
        tbl.increments();
        tbl.string('name,', 15)
    })

    .createTable('casting_time', tbl => {
        tbl.increments();
        tbl.string('name', 15)
    })

    .createTable('spells', tbl => {
        tbl.increments();
        tbl.string('name', 50)
            .notNullable;
        tbl.string('range', 100)
            .notNullable;
        tbl.integer('level')
            .references('id')
            .inTable('level')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.string('duration', 50)
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
        tbl.string('classes', 100)
        tbl.string('school', 30);
        tbl.text('description')
            .notNullable;
        tbl.text('higher_levels')
    })

    .createTable('spell_classes', tbl => {
        tbl.increments();
        // tbl.string('name', 30)
        tbl.integer('spell_name')
            .references('id')
            .inTable('spells')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('class_id')
            .references('id')
            .inTable('player_class')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })

    // This can be removed
    // .createTable('tags', tbl => {
    //     tbl.increments();
    //     tbl.string('name', 20)
    //         .notNullable;
    // })

    // this can be replaced with buttons
    // .createTable('level', tbl => {
    //     tbl.increments();
    //     tbl.string('name', 10)
    //         .notNullable;
    // })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('magic_school')
  .dropTableIfExists('spell_classes')
  .dropTableIfExists('casting_time')
  .dropTableIfExists('player_class')
  .dropTableIfExists('spells')
//   .dropTableIfExists('tags')
  .dropTableIfExists('level')

};