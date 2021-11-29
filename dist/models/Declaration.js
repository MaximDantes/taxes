"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var collections_1 = require("./collections");
var schema = new mongoose_1.Schema({
    payerId: { type: mongoose_1.Schema.Types.ObjectId, ref: collections_1.collections.payer, required: true },
    term: { type: Date, required: true },
    sum: { type: Number, required: true },
    date: { type: Date, required: true }
});
var DeclarationModel = (0, mongoose_1.model)(collections_1.collections.declaration, schema);
exports.default = DeclarationModel;
