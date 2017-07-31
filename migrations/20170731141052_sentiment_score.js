'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('sentiment_score', (table) => {
    table.increments('id').primary();
    table.integer('channel_map_id').notNullable().references('id').inTable('channel_map').onDelete('CASCADE').index();
    table.integer('score').notNullable();
    table.integer('magnitude').notNullable();
    table.integer('number_of_messages').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sentiment_score');
};
