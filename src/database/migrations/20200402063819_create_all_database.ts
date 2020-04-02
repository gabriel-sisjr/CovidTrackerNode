/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  return knex.schema.createTable('usuarios', table => {
    table.increments('ID').primary()
    table.string('NOME', 50).notNullable()
    table.string('CPF', 15).notNullable()
    table.string('SENHA', 100).notNullable()
    table.string('EMAIL', 100).notNullable()
    table.dateTime('CREATED_AT', { precision: 1 }).defaultTo(knex.fn.now(1)).notNullable()
  }).then(() => {
    return knex.schema.createTable('pessoas', table => {
      table.increments('ID').primary()
      table.string('NOME', 50).notNullable()
      table.string('CPF', 15).notNullable()
      table.boolean('ISCONFIRMED').defaultTo(false).notNullable()
      table.dateTime('CREATED_AT', { precision: 1 }).defaultTo(knex.fn.now(1)).notNullable()
      table.dateTime('UPDATED_AT', { precision: 1 }).defaultTo(knex.fn.now(1)).notNullable()

      // forein
      table.integer('USER_ID', 11).unsigned().references('ID').inTable('usuarios')
    })
  }).then(() => {
    return knex.schema.createTable('endereco', table => {
      table.increments('ID').primary()
      table.string('LATITUDE', 50).notNullable()
      table.string('LONGITUDE', 15).notNullable()
      table.string('CEP', 8).notNullable()
      table.string('LOGRADOURO', 100).notNullable()
      table.string('BAIRRO', 80).notNullable()
      table.string('CIDADE', 80).notNullable()
      table.string('UF', 2).notNullable()
      table.dateTime('CREATED_AT', { precision: 1 }).defaultTo(knex.fn.now(1)).notNullable()
      table.dateTime('UPDATED_AT', { precision: 1 }).defaultTo(knex.fn.now(1)).notNullable()

      // forein
      table.integer('PESSOA_ID', 11).unsigned().references('ID').inTable('pessoas')
    })
  })
}

export async function down (knex: Knex): Promise<any> {
  return knex.schema.dropTable('endereco')
    .then(() => knex.schema.dropTable('pessoas')
      .then(() => knex.schema.dropTable('usuarios')))
}
