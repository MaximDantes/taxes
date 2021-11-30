import {model, Query, Schema, Document, Model} from 'mongoose'
import {collections} from './collections'

export interface TaxRate {
    taxId: Schema.Types.ObjectId
    regionId?: Schema.Types.ObjectId
    value: number
    date: Date
}

interface TaxRatesQueryHelpers {
    byTaxId(taxId: string): Query<any, Document<TaxRate>> & TaxRatesQueryHelpers
}

const schema = new Schema<TaxRate>({
    taxId: {type: Schema.Types.ObjectId, ref: collections.tax, required: true},
    regionId: {type: Schema.Types.ObjectId, ref: collections.region, required: false},
    value: {type: Number, required: true},
    date: {type: Date, required: true}
})

schema.query.byTaxId = function(taxId: string): Query<any, Document<TaxRate>> & TaxRatesQueryHelpers {
    return this.find({taxId})
}

const TaxRateModel = model<TaxRate, Model<TaxRate, TaxRatesQueryHelpers>>(collections.taxRate, schema)

export default TaxRateModel