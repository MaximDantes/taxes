import { Document, Model, Query, Schema, model } from 'mongoose';
import {collections} from './collections'

export interface Region {
    name: string
}

interface RegionQueryHelpers {
    byName(name: string): Query<any, Document<Region>> & RegionQueryHelpers;
}

const schema = new Schema<Region>({
    name: { type: String, required: true }
})

schema.query.byName = function(name): Query<any, Document<Region>> & RegionQueryHelpers {
    return this.find({ name: name })
}

const RegionModel = model<Region, Model<Region, RegionQueryHelpers>>(collections.region, schema);

export default RegionModel