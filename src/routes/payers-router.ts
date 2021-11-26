import express from 'express'
import payersController from '../controllers/payers-controller'

const payersRouter = express.Router()

payersRouter.get('/', payersController.getAll)
payersRouter.post('/', payersController.add)

export default payersRouter