"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var collections_1 = require("./collections");
var schema = new mongoose_1.Schema({
    title: { type: String, required: true }
});
var TaxModel = (0, mongoose_1.model)(collections_1.collections.tax, schema);
exports.default = TaxModel;
