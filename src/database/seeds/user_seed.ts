/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Knex from 'knex'

import { popularArray } from '../../Utils/Methods/PopulateSeeds'

export async function seed (knex: Knex): Promise<any> {
  // Deleta todas as entradas existentes
  return knex('usuarios').truncate()
    .then(() => {
      // Inserts seed
      return knex('usuarios').insert(popularArray(knex, 'USUARIO'))
    })
};
