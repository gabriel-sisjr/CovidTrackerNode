/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Knex from 'knex'

import { popularArray } from '../../Utils/Methods/PopulateSeeds'

export async function seed (knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('endereco').del()
    .then(() => {
      // Inserts seed entries
      return knex('endereco').insert(popularArray(knex, 'ENDERECO'))
    })
};
