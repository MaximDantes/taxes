import {Request, Response} from 'express'
import KindOfActivityModel from '../models/KindOfActivity'

const kindsOfActivityController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const data = await KindOfActivityModel.find()

            res.status(200).send(data)
        } catch (e) {
            res.status(500).send({error: 'e'})
        }
    },

    getByPayerId: async (req: Request, res: Response) => {
        try {
            console.log(req.params.kindOfActivityId)

            const data = await KindOfActivityModel.find({
                _id: req.params.kindOfActivityId
            })

            res.status(200).send(data)
        } catch (e) {
            res.status(500).send({error: 'e'})
        }
    },

    add: async (req: Request, res: Response) => {
        try {
            const data = new KindOfActivityModel({
                name: req.body.name,
                useInSimpleTax: req.body.useInSimpleTax
            })
            await data.save()

            res.send(data)
        } catch (e) {
            console.error(e)
            res.status(500).send('error')
        }
    }
}

export default kindsOfActivityController