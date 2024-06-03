/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      first_name: 'Jake',
      last_name: 'Wingate',
      email: 'jacobwingate33@gmail.com',
      country: 'New Zealand',
      is_subscribed: true,
    },
    {
      id: 2,
      first_name: 'Sally',
      last_name: 'Williams',
      email: 'sallyw@gmail.com',
      country: 'Australia',
      is_subscribed: true,
    },
    {
      id: 3,
      first_name: 'John',
      last_name: 'Lennon',
      email: 'lennon@thebeatles.com',
      country: 'England',
      is_subscribed: true,
    },
  ])
}
