/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Knex from 'knex'

import { popularArray } from '../../Utils/Methods/PopulateSeeds'

export async function seed (knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('endereco').del()
    .then(() => knex('pessoas').del()
      .then(() => knex('usuarios').del())
      .then(() => {
        // Inserts seed entries
        knex('usuarios').insert(popularArray(knex, 'USUARIO'))
        knex('pessoas').insert(popularArray(knex, 'PESSOA'))
        knex('endereco').insert(popularArray(knex, 'ENDERECO'))
      }))
};
