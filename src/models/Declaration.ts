import {model, Schema} from 'mongoose'
import {collections} from './collections'

export interface Declaration {
    payerId: Schema.Types.ObjectId
    term: Date
    sum: number
    date: Date
}

const schema = new Schema<Declaration>({
    payerId: {type: Schema.Types.ObjectId, ref: collections.payer, required: true},
    term: {type: Date, required: true},
    sum: {type: Number, required: true},
    date: {type: Date, required: true}
})

const DeclarationModel = model<Declaration>(collections.declaration, schema)

export default DeclarationModel