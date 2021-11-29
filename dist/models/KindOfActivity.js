"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var collections_1 = require("./collections");
// interface KindOfActivityQueryHelpers {
//     byName(name: string): Query<any, Document<Region>> & KindOfActivityQueryHelpers
//     byUseInSimpleTax(useInSimpleTax: boolean): Query<any, Document<Region>> & KindOfActivityQueryHelpers
// }
var schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    useInSimpleTax: { type: Boolean, required: true }
});
// schema.query.byName = function(name): Query<any, Document<Region>> & KindOfActivityQueryHelpers {
//     return this.find({ name })
// }
// schema.query.byUseInSimpleTax = function(useInSimpleTax): Query<any, Document<Region>> & KindOfActivityQueryHelpers {
//     return this.find({ useInSimpleTax })
// }
var KindOfActivityModel = (0, mongoose_1.model)(collections_1.collections.kindOfActivity, schema);
exports.default = KindOfActivityModel;
