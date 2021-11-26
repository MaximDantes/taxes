import {Request, Response} from 'express'
import KindOfActivityModel, {KindOfActivity} from '../models/KindOfActivity'

const kindsOfActivityController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const data = await KindOfActivityModel.find()

            const parsedData: KindOfActivity[] = []

            data.map(item => {
                parsedData.push({
                    name: item.name,
                    useInSimpleTax: item.useInSimpleTax
                })
            })

            res.status(200).send(parsedData)
        } catch (e) {
            console.error(e)
            res.status(500).send('error')
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