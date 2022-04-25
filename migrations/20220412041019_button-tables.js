const { table } = require("console");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    // return knex.schema.createTable('success_at_cost_buttons', tbl => {
    //     tbl.increments();
    //     tbl.text('name', 50)
    //         .notNullable();
    //     tbl.text('objName', 50)
    //         .notNullable();
    //     tbl.boolean('open')
    //         .defaultTo(false);
    // })

    // .createTable('wild_magic_buttons', tbl => {
    //     tbl.increments();
    //     tbl.text('name', 50)
    //         .notNullable();
    //     tbl.text('objName', 50)
    //         .notNullable();
    //     tbl.boolean('open')
    //         .defaultTo(false);
    // })

    // .createTable('magic_item_buttons', tbl => {
    //     tbl.increments();
    //     tbl.text('name', 50)
    //         .notNullable();
    //     tbl.text('objName', 50)
    //         .notNullable();
    //     tbl.boolean('open')
    //         .defaultTo(false);
    // })

    // .createTable('nav_buttons', tbl => {
    //     tbl.increments();
    //     tbl.text('name', 50)
    //         .notNullable();
    //     tbl.text('objName', 50)
    //         .notNullable();
    //     tbl.boolean('open')
    //         .defaultTo(false);
    // })

    // .createTable('spell_level_buttons', tbl => {
    //     tbl.increments();
    //     tbl.integer('name', 50)
    //         .notNullable();
    //     tbl.text('objName', 50)
    //         .notNullable();
    //     tbl.boolean('open')
    //         .defaultTo(false)
    // })

    // .createTable('dice_buttons', tbl => {
    //     tbl.increments();
    //     tbl.integer('name', 5)
    //         .notNullable();
    //     tbl.boolean('open')
    //         .defaultTo(false);
    // })

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
    })

    .createTable('sub_nav_roll_content', tbl => {
        tbl.increments();
        tbl.string('value')
            .notNullable;
        tbl.integer('parent_foreign_key')
            .references('id')
            .inTable('sub_nav_buttons')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable;

    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
//   return knex.schema.dropTableIfExists('success_at_cost_buttons')
//   .dropTableIfExists('wild_magic_buttons')
//   .dropTableIfExists('magic_item_buttons')
//   .dropTableIfExists('nav_buttons')
//   .dropTableIfExists('spell_level_buttons')
//   .dropTableIfExists('dice_buttons');

    return knex.schema.dropTableIfExists('sub_nav_roll_content')
    .dropTableIfExists('sub_nav_buttons')
    .dropTableIfExists('main_nav_buttons')

};