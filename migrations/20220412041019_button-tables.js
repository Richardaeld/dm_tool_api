const { table } = require("console");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('main_nav_buttons', tbl => {
        tbl.increments();
        tbl.string('name', 50)
            .notNullable;
    })

    .createTable('sub_nav_buttons', tbl => {
        tbl.increments();
        tbl.string('name', 50)
            .notNullable;
        tbl.string('obj_name', 50);
        tbl.integer('parent_foreign_key')
            .references('id')
            .inTable('main_nav_buttons')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable;
        tbl.boolean('random_roll_only')
            .defaultTo(false);
    })

    .createTable('sub_nav_roll_content', tbl => {
        tbl.increments();
        tbl.string('value')
            .notNullable;
        tbl.integer('sub_foreign_key')
            .references('id')
            .inTable('sub_nav_buttons')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable;
        tbl.boolean('more_content')
            .defaultTo(false)
    })

    .createTable('content_nav_button', tbl => {
        tbl.increments;
        tbl.string('name')
            .notNullable;
        tbl.integer('content_foreign_key')
            .references('id')
            .inTable('sub_nav_roll_content')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable;
        tbl.string('child_table_name', 50)
            .notNullable;
    })

    .createTable('spells', tbl => {
        tbl.increments();
        tbl.string('name', 50)
            .notNullable;
        tbl.integer('level', 1)
            .notNullable;
        tbl.string('range', 100)
            .notNullable;
        tbl.string('duration', 50)
            .notNullable;
        tbl.string('casting_time', 100)
            .notNullable;
        tbl.string('reaction_condition', 150);
        tbl.boolean('ritual')
            .notNullable;
        tbl.boolean('component_material')
            .defaultTo(false);
        tbl.boolean('component_somatic')
            .defaultTo(false);
        tbl.boolean('component_verbal')
            .defaultTo(false);
        tbl.string('material_description', 100);
        tbl.string('classes', 100)
            .notNullable;
        tbl.string('school', 30)
            .notNullable;
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
    return knex.schema
    .dropTableIfExists('spells')
    .dropTableIfExists('content_nav_button')
    .dropTableIfExists('sub_nav_roll_content')
    .dropTableIfExists('sub_nav_buttons')
    .dropTableIfExists('main_nav_buttons')

};