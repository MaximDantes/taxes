import {Request, Response} from 'express'
import TaxModel from '../models/Tax'

const taxesController = {
    getAll: async (req: Request, res: Response) => {
        const data = await TaxModel.find()

        res.status(200).send(data)
    },
}

export default taxesController