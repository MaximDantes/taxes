import {Request, Response} from 'express'
import KindOfActivityModel from '../models/KindOfActivity'
import KindOfActivity from '../models/KindOfActivity'

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
            const data = await KindOfActivityModel.find({
                _id: req.params.kindOfActivityId
            })

            res.status(200).send(data)
        } catch (e) {
            res.status(500).send({error: 'e'})
        }
    },

    edit: async (req: Request, res: Response) => {
        try {
            await KindOfActivity.updateOne({_id: req.body.id}, req.body)

            const data = await KindOfActivityModel.findOne({_id: req.body.id})

            res.status(200).send(data)
        } catch (e) {
            console.error(e)
            res.status(500).send('error')
        }
    },

    add: async (req: Request, res: Response) => {
        try {
            const data = new KindOfActivityModel(req.body)
            await data.save()

            res.status(200).send(data)
        } catch (e) {
            console.error(e)
            res.status(500).send('error')
        }
    },

    delete: async (req: Request, res: Response) => {
        try {
            await KindOfActivity.deleteOne({_id: req.params.id})

            res.status(200).send(req.params.id)
        } catch (e) {
            console.error(e)
            res.status(500).send({error: 'e'})
        }
    }
}

export default kindsOfActivityController