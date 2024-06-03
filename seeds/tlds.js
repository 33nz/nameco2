/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tlds').del()
  await knex('tlds').insert([
    { id: 1, name: 'dataco' },
    { id: 2, name: 'sportco' },
    { id: 3, name: 'bakingco' },
  ])
}
