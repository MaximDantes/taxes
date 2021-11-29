"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dbConfig_1 = __importDefault(require("./config/dbConfig"));
var regions_route_1 = __importDefault(require("./routes/regions-route"));
var kinds_of_activity_router_1 = __importDefault(require("./routes/kinds-of-activity-router"));
var body_parser_1 = __importDefault(require("body-parser"));
var payers_router_1 = __importDefault(require("./routes/payers-router"));
var taxes_route_1 = __importDefault(require("./routes/taxes-route"));
var tax_rates_route_1 = __importDefault(require("./routes/tax-rates-route"));
var declarations_router_1 = __importDefault(require("./routes/declarations-router"));
var declaration_tax_rates_router_1 = __importDefault(require("./routes/declaration-tax-rates-router"));
var PORT = 4000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
mongoose_1.default.connect(dbConfig_1.default.uri)
    .then(function () { return console.log('MongoDB connected'); })
    .catch(function (e) { return console.error(e); });
mongoose_1.default.set('toJSON', {
    virtuals: true,
    transform: function (doc, converted) {
        delete converted._id;
        delete converted.__v;
    }
});
app.use('/regions', regions_route_1.default);
app.use('/kindsOfActivity', kinds_of_activity_router_1.default);
app.use('/payers', payers_router_1.default);
app.use('/taxes', taxes_route_1.default);
app.use('/taxRates', tax_rates_route_1.default);
app.use('/declarations', declarations_router_1.default);
app.use('/declarationTaxRates', declaration_tax_rates_router_1.default);
app.listen(PORT, function () {
    console.log("Server started on port " + PORT);
});
