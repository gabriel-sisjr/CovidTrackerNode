import { Router } from 'express'

// Rotas
import usuarioRoutes from './usuarioRoute'
import pessoaRoutes from './pessoaRoute'

// Roteamento
const router = Router()

// Rotas
router.use(usuarioRoutes)
router.use(pessoaRoutes)

export default router
