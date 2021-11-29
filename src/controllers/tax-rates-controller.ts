import TaxRateModel from '../models/TaxRate'
import {Request, Response} from 'express'

const taxRatesController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const data = await TaxRateModel.find()

            res.status(200).json(data)
        } catch (e) {
            res.status(500).json({error: 'e'})
        }
    },

    add: async (req: Request, res: Response) => {
        try {
            const data = new TaxRateModel(req.body)
            await data.save()

            res.status(200).json(data)
        } catch (e) {
            res.status(500).json({error: 'e'})
        }
    }
}

export default taxRatesController