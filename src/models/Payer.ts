import {model, Schema} from 'mongoose'
import {collections} from './collections'

export interface Payer {
    name: string
    surname: string
    secondName: string
    passport: string
    regionId: Schema.Types.ObjectId
    kindOfActivityId: Schema.Types.ObjectId
}

const schema = new Schema<Payer>({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    secondName: { type: String, required: true },
    passport: { type: String, required: true },
    regionId: { type: Schema.Types.ObjectId, ref: collections.region, required: true },
    kindOfActivityId: { type: Schema.Types.ObjectId, ref: collections.kindOfActivity, required: true }
})

const PayerModel = model<Payer>(collections.payer, schema)

export default PayerModel