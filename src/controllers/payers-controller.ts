import {Request, Response} from 'express'
import PayerModel from '../models/Payer'
import RegionModel from '../models/Region'
import {Payer} from '../models/Payer'

const payersController = {
    getAll: async (req: Request, res: Response) => {
        const data = await PayerModel.find()

        const parsedData: Payer[] = []

        data.map(item => {
            parsedData.push({
                name: item.name,
                region: item.region
            })
        })

        res.status(200).json(parsedData)
    },

    add: async (req: Request, res: Response) => {
        const region = await RegionModel.findOne({id: req.body.regionId})

        const data = new PayerModel({
            name: req.body.name,
            region
        })
        await data.save()

        res.status(200).json(data)
    }
}

export default payersController