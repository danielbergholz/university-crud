import { Router } from 'express'

import ClassController from './app/controllers/ClassController'

const routes = Router()

routes.get('/disciplinas', ClassController.index)
routes.post('/disciplinas', ClassController.store)

routes.put('/disciplinas/:id', ClassController.update)
routes.delete('/disciplinas/:id', ClassController.delete)

export default routes
