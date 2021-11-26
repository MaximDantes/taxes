import express from 'express'
import kindsOfActivityController from '../controllers/kinds-of-activity-controller'

const kindsOfActivityRouter = express.Router()

kindsOfActivityRouter.get('/', kindsOfActivityController.getAll)
kindsOfActivityRouter.post('/', kindsOfActivityController.add)

export default kindsOfActivityRouter