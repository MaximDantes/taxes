import {Request, Response} from 'express'
import PayerModel, {Payer} from '../models/Payer'
import {HttpResponse} from '../types/types'
import KindOfActivity from '../models/KindOfActivity'
import KindOfActivityModel from '../models/KindOfActivity'

const payersController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const data = await PayerModel.find()

            res.status(200).json(data)
        } catch (e) {
            console.log(e)
            res.status(500).json({error: 'error'})
        }
    },

    add: async (req: Request, res: Response) => {
        try {
            const data = new PayerModel(req.body)
            await data.save()

            res.status(200).json(data)
        } catch (e) {
            console.log(e)
            res.status(500).json({error: 'error'})
        }
    },

    edit: async (req: Request, res: Response) => {
        try {
            await PayerModel.updateOne({_id: req.body.id}, req.body)

            const data = await PayerModel.findOne({_id: req.body.id})

            res.status(200).json(data)
        } catch (e) {
            console.log(e)
            res.status(500).json({error: 'error'})
        }
    },

    delete: async (req: Request, res: Response) => {
        try {
            await PayerModel.deleteOne({_id: req.params.id})

            res.status(200).send(req.params.id)
        } catch (e) {
            console.error(e)
            res.status(500).send({error: 'e'})
        }
    }
}

export default payersController