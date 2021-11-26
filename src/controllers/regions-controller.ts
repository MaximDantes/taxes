import RegionModel, {Region} from '../models/Region'
import {Request, Response} from 'express'

const regionsController = {
    get: async (req: Request, res: Response) => {
        try {
            const data = await RegionModel.find().byName(req.params.name)

            res.status(200).json(data)
        } catch (e) {
            console.log(e)
            res.status(500).send('error')
        }
    },

    getAll: async (req: Request, res: Response<Region[]>) => {
        try {
            const data = await RegionModel.find()

            const parsedData: Region[] = []

            data.map(item => {
                parsedData.push({
                    name: item.name
                })
            })

            res.status(200).json(parsedData)
        } catch (e) {
            console.log(e)
            // res.status(500).send('error')
        }
    },

    add: async (req: Request, res: Response) => {
        try {
            console.log(req.body)

            const data = new RegionModel({
                name: req.body.name
            })
            await data.save()

            res.status(200).json(data)
        } catch (e) {
            console.log(e)
            res.status(500).send('error')
        }
    }
}

export default regionsController