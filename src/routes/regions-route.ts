import express from 'express'
import regionsController from '../controllers/regions-controller'

const regionsRouter = express.Router()

regionsRouter.get('/', regionsController.getAll)
regionsRouter.get('/:name', regionsController.get)
regionsRouter.post('/', regionsController.add)

export default regionsRouter