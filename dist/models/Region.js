"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var collections_1 = require("./collections");
var schema = new mongoose_1.Schema({
    name: { type: String, required: true }
});
schema.query.byName = function (name) {
    return this.find({ name: name });
};
var RegionModel = (0, mongoose_1.model)(collections_1.collections.region, schema);
exports.default = RegionModel;
