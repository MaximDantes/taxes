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

    getAll: async (req: Request, res: Response) => {
        try {
            const data = await RegionModel.find()

            res.status(200).json(data)
        } catch (e) {
            console.log(e)
            res.status(500).send({error: 'e'})
        }
    },

    add: async (req: Request, res: Response) => {
        try {
            const data = new RegionModel({
                name: req.body.name
            })
            await data.save()

            res.status(200).json(data)
        } catch (e) {
            console.log(e)
            res.status(500).send({error: 'e'})
        }
    }
}

export default regionsController