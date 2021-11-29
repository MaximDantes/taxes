import TaxRateModel from '../models/TaxRate'
import {Request, Response} from 'express'

const taxRatesController = {
    get: async (req: Request, res: Response) => {
        try {
            // const data = await TaxRateModel.find({
            //     taxId: req.params.taxId,
            //     regionId: req.params.regionId
            // })

            res.status(200).json({error: 'ffrfr'})
        } catch (e) {
            res.status(500).json({error: 'ffrfr'})
        }
    },

    add: async (req: Request, res: Response) => {
        try {
            console.log(req.body)

            const data = new TaxRateModel(req.body)
            await data.save()

            res.status(200).json(data)
        } catch (e) {
            res.status(500).json({error: 'ffrfr'})
        }
    }
}

export default taxRatesController