import {Request, Response} from 'express'
import DeclarationModel from '../models/Declaration'

export const declarationsController = {
    add: async (req: Request, res: Response) => {
        try {
            const data = new DeclarationModel(req.body)

            await data.save()

            res.status(200).json(data)

        } catch (e) {
            res.status(500).json({error: 'e'})
        }
    }
}