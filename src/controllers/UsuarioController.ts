import { Request, Response } from 'express'

class UsuarioController {
  public async getAll (req: Request, res: Response): Promise<Response> {
    return res.send('OI')
  }

  public async create (req: Request, res: Response): Promise<Response> {
    return res.send('oi')
  }

  public async getById (req: Request, res: Response): Promise<Response> {
    return res.send('oi')
  }
}

export default new UsuarioController()
