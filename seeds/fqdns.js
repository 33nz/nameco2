/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('fqdns').del()
  await knex('fqdns').insert([
    {
      id: 1,
      sld: 'johns',
      tld: 'guitarco',
      mint_date: '2024-02-12',
      renewal_date: '2025-02-12',
    },
    {
      id: 2,
      sld: 'auckland',
      tld: 'dataco',
      mint_date: '2024-03-28',
      renewal_date: '2025-03-28',
    },
    {
      id: 3,
      sld: 'austin',
      tld: 'mintco',
      mint_date: '2024-05-19',
      renewal_date: '2025-05-19',
    },
  ])
}
