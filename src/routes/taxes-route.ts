import express from 'express'
import taxesController from '../controllers/taxes-controller'

const taxesRouter = express.Router()

taxesRouter.get('/', taxesController.getAll)

export default taxesRouter