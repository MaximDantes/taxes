import express from 'express'
import kindsOfActivityController from '../controllers/kinds-of-activity-controller'

const kindsOfActivityRouter = express.Router()

kindsOfActivityRouter.get('/', kindsOfActivityController.getAll)
kindsOfActivityRouter.get('/:kindOfActivityId', kindsOfActivityController.getByPayerId)
kindsOfActivityRouter.post('/', kindsOfActivityController.add)
kindsOfActivityRouter.put('/', kindsOfActivityController.edit)
kindsOfActivityRouter.delete('/:id', kindsOfActivityController.delete)

export default kindsOfActivityRouter