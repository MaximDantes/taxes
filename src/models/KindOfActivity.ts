import {model, Schema} from 'mongoose'
import {collections} from './collections'

export interface KindOfActivity {
    title: string
    useInSimpleTax: boolean
}

// interface KindOfActivityQueryHelpers {
//     byName(name: string): Query<any, Document<Region>> & KindOfActivityQueryHelpers
//     byUseInSimpleTax(useInSimpleTax: boolean): Query<any, Document<Region>> & KindOfActivityQueryHelpers
// }

const schema = new Schema<KindOfActivity>({
    title: { type: String, required: true },
    useInSimpleTax: { type: Boolean, required: true }
})

// schema.query.byName = function(name): Query<any, Document<Region>> & KindOfActivityQueryHelpers {
//     return this.find({ name })
// }
// schema.query.byUseInSimpleTax = function(useInSimpleTax): Query<any, Document<Region>> & KindOfActivityQueryHelpers {
//     return this.find({ useInSimpleTax })
// }

const KindOfActivityModel = model<KindOfActivity>(collections.kindOfActivity, schema)

export default KindOfActivityModel