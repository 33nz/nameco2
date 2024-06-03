/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('slds').del()
  await knex('slds').insert([
    { id: 1, name: 'johns' },
    { id: 2, name: 'auckland' },
    { id: 3, name: 'austin' },
  ])
}
