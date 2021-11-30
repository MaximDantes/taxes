import express from 'express'
import payersController from '../controllers/payers-controller'

const payersRouter = express.Router()

payersRouter.get('/', payersController.getAll)
payersRouter.post('/', payersController.add)
payersRouter.put('/', payersController.edit)
payersRouter.delete('/', payersController.delete)

export default payersRouter