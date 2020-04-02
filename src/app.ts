import express from 'express'
import cors from 'cors'

import router from './routes/routes'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()

      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      // Node reconheça corpo de requisição em formato JSON.
      this.express.use(express.json())
      // Permitindo o acesso remoto de qualquer lugar a essa aplicação.
      this.express.use(cors())
    }

    private routes (): void {
      this.express.use(router)
    }
}

export default new App().express
