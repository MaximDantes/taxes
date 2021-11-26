import {Request, Response} from 'express'
import TaxModel, {Tax} from '../models/Tax'

const taxesController = {
    getAll: async (req: Request, res: Response) => {
        const data = await TaxModel.find()

        const parsedData: Tax[] = []

        data.map(item => {
            parsedData.push({
                title: item.title
            })
        })

        res.status(200).send(parsedData)
    },
}

export default taxesController