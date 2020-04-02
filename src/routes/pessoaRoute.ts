import { Router } from 'express'

const pessoaRoutes = Router()

pessoaRoutes.get('/pessoas', (req, res) => {
  return res.send('Get All Pessoas')
})

export default pessoaRoutes
