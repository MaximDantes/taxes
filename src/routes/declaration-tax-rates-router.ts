import express from 'express'
import declarationTaxRatesController from '../controllers/declaration-tax-rates-controller'

const declarationTaxRatesRouter = express.Router()

declarationTaxRatesRouter.post('/', declarationTaxRatesController.add)

export default declarationTaxRatesRouter