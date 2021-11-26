import {model, Schema} from 'mongoose'
import {collections} from './collections'

export interface Tax {
    title: string
}

const schema = new Schema<Tax>({
    title: { type: String, required: true }
})

const TaxModel = model<Tax>(collections.tax, schema)

export default TaxModel