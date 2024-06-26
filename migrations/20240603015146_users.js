/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('country')
    table.boolean('is_subscribed')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable
}
