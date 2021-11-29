"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var collections_1 = require("./collections");
var schema = new mongoose_1.Schema({
    taxId: { type: mongoose_1.Schema.Types.ObjectId, ref: collections_1.collections.tax, required: true },
    regionId: { type: mongoose_1.Schema.Types.ObjectId, ref: collections_1.collections.region, required: false },
    value: { type: Number, required: true }
});
var TaxRateModel = (0, mongoose_1.model)(collections_1.collections.taxRate, schema);
exports.default = TaxRateModel;
