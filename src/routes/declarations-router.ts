import express from 'express'
import {declarationsController} from '../controllers/declarations-controller'

const declarationsRouter = express.Router()

declarationsRouter.post('/', declarationsController.add)

export default declarationsRouter