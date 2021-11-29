"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var collections_1 = require("./collections");
var schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    secondName: { type: String, required: true },
    passport: { type: String, required: true },
    regionId: { type: mongoose_1.Schema.Types.ObjectId, ref: collections_1.collections.region, required: true },
    kindOfActivityId: { type: mongoose_1.Schema.Types.ObjectId, ref: collections_1.collections.kindOfActivity, required: true }
});
var PayerModel = (0, mongoose_1.model)(collections_1.collections.payer, schema);
exports.default = PayerModel;
