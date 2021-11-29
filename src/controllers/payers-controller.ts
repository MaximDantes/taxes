import {Request, Response} from 'express'
import PayerModel, {Payer} from '../models/Payer'
import {HttpResponse} from '../types/types'

const payersController = {
    getAll: async (req: Request, res: Response) => {
        const data = await PayerModel.find()

        res.status(200).json(data)
    },

    add: async (req: Request, res: Response) => {
        try {
            const data = new PayerModel(req.body)
            await data.save()

            const httpResponse: HttpResponse<Payer> = {data}
            res.status(200).json(httpResponse)
        } catch (e) {
            //TODO send error
            const httpResponse: HttpResponse<Payer> = {error: 'dedede'}
            res.status(500).json(httpResponse)
        }
    }
}

export default payersController