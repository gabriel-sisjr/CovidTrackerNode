import { Request, Response } from 'express'

import Usuario from '../models/Usuario'
import { connection } from '../database/connection'

class UsuarioController {
  public async getAll (req: Request, res: Response): Promise<Response> {
    // const usuarios: Array<Usuario> = []
    const itens = await connection().select().from<Usuario>('usuarios')
    return res.json(itens)
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
      const sucesso = await connection().table<Usuario>('usuarios').where('ID', Number(id))
      return res.json(sucesso)
    } catch (err) {
      return res.json(err)
    }
  }
}

export default new UsuarioController()
