/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('fqdns', function (table) {
    table.increments('id')
    table.string('sld')
    table.string('tld')
    table.date('mint_date')
    table.date('renewal_date')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable
}
