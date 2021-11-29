import {model, Schema} from 'mongoose'
import {collections} from './collections'

export interface TaxRate {
    taxId: Schema.Types.ObjectId
    regionId?: Schema.Types.ObjectId
    value: number
}

const schema = new Schema<TaxRate>({
    taxId: {type: Schema.Types.ObjectId, ref: collections.tax, required: true},
    regionId: {type: Schema.Types.ObjectId, ref: collections.region, required: false},
    value: {type: Number, required: true}
})

const TaxRateModel = model<TaxRate>(collections.taxRate, schema)

export default TaxRateModel