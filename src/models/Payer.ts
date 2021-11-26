import {model, Schema} from 'mongoose'
import {collections} from './collections'

export interface Payer {
    name: string
    region: Schema.Types.ObjectId
}

const schema = new Schema<Payer>({
    name: { type: String, required: true },
    region: { type: Schema.Types.ObjectId, ref: collections.region, required: true }
})

const PayerModel = model<Payer>(collections.payer, schema)

export default PayerModel