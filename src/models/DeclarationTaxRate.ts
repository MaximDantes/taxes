import {model, Schema} from 'mongoose'
import {collections} from './collections'

export interface DeclarationTaxRate {
    declarationId: Schema.Types.ObjectId
    taxRateId: Schema.Types.ObjectId
    paid: boolean
}

const schema = new Schema<DeclarationTaxRate>({
    declarationId: {type: Schema.Types.ObjectId, ref: collections.declaration, required: true},
    taxRateId: {type: Schema.Types.ObjectId, ref: collections.taxRate, required: true},
    paid: {type: Boolean, default: false}
})

const DeclarationTaxRateModel = model<DeclarationTaxRate>(collections.declarationTax, schema)

export default DeclarationTaxRateModel