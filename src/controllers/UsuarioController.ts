import { Request, Response } from 'express'

import Usuario from '../models/Usuario'
import { connection } from '../database/connection'

class UsuarioController {
  public async getAll (req: Request, res: Response): Promise<Response> {
    // Forçando o retorno ser usuario.
    const users = await connection().table('usuarios').select<Usuario>()
    return res.json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user: Usuario = req.body
    user.CREATED_AT = connection().fn.now(1)

    try {
      const sucesso = await connection().table('usuarios').insert(user)
      return res.json(sucesso)
    } catch (err) {
      return res.json(err)
    }
  }

  public async getById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      // Tipagem no table pra auxiliar o Where.
      // Tipagem no first, pra tipar o retorno e facilitar a manipulação.
      const user = await connection().table<Usuario>('usuarios').where('ID', Number(id)).first<Usuario>()
      return res.json(user)
    } catch (err) {
      return res.json(err)
    }
  }
}

export default new UsuarioController()
