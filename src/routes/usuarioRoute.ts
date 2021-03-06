import { Router } from 'express'

import UsuarioController from '../controllers/UsuarioController'

const usuarioRoutes = Router()

usuarioRoutes.get('/usuario', UsuarioController.getAll)
usuarioRoutes.get('/usuario/:id', UsuarioController.getById)
usuarioRoutes.post('/usuario', UsuarioController.create)

export default usuarioRoutes
