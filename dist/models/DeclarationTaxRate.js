"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var collections_1 = require("./collections");
var schema = new mongoose_1.Schema({
    declarationId: { type: mongoose_1.Schema.Types.ObjectId, ref: collections_1.collections.declaration, required: true },
    taxRateId: { type: mongoose_1.Schema.Types.ObjectId, ref: collections_1.collections.taxRate, required: true },
    paid: { type: Boolean, default: false }
});
var DeclarationTaxRateModel = (0, mongoose_1.model)(collections_1.collections.declarationTax, schema);
exports.default = DeclarationTaxRateModel;
