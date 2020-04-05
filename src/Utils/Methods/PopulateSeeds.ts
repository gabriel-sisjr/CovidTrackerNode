/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Knex from 'knex'

// Models
import Usuario from '../../models/Usuario'
import Pessoa from '../../models/Pessoa'
import Endereco from '../../models/Endereco'

export function gerarString (qtdCaracteres: number): string {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < qtdCaracteres; i++) {
    result += characters.charAt(Math.floor(Math.random() * qtdCaracteres))
  }
  return result
}
function tipoModel (tipoObjeto: string, knex: Knex): any {
  switch (tipoObjeto) {
    case 'USUARIO': {
      const user: Usuario = {
        ID: 0,
        NOME: gerarString(50),
        CPF: gerarString(11),
        EMAIL: `${gerarString(85)}@${gerarString(10)}.${gerarString(3)}`,
        SENHA: gerarString(100),
        CREATED_AT: knex.fn.now(1)
      }

      return user
    }

    case 'PESSOA': {
      const pessoa: Pessoa = {
        ID: 0,
        CPF: gerarString(11),
        NOME: gerarString(50),
        ISCONFIRMED: false,
        CREATED_AT: knex.fn.now(1),
        USER_ID: 1
      }

      return pessoa
    }

    case 'ENDERECO': {
      const endereco: Endereco = {
        ID: 0,
        LATITUDE: gerarString(10),
        LONGITUDE: gerarString(10),
        CEP: gerarString(8),
        LOGRADOURO: gerarString(100),
        BAIRRO: gerarString(100),
        CIDADE: gerarString(80),
        UF: gerarString(2),
        CREATED_AT: knex.fn.now(1),
        PESSOA_ID: 1
      }

      return endereco
    }

    default:
      return null
  }
}

// populando o array
export function popularArray (knex: Knex, tipoObjeto: string): Array<any> {
  const itens: Array<any> = []

  for (let index = 0; index < (Math.floor(Math.random() * 100) + 1); index++) itens.push(tipoModel(tipoObjeto, knex))

  return itens
}
