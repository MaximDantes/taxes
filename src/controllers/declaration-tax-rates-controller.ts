import {Request, Response} from 'express'
import DeclarationTaxRate from '../models/DeclarationTaxRate'

const declarationTaxRatesController = {
    add: async (req: Request, res: Response) => {
        try {
            const data = new DeclarationTaxRate(req.body)

            await data.save()

            res.status(200).json(data)
        } catch (e) {
            res.status(500).json({error: 'e'})
        }
    }
}

export default declarationTaxRatesController