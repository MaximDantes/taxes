"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var declaration_tax_rates_controller_1 = __importDefault(require("../controllers/declaration-tax-rates-controller"));
var declarationTaxRatesRouter = express_1.default.Router();
declarationTaxRatesRouter.post('/', declaration_tax_rates_controller_1.default.add);
exports.default = declarationTaxRatesRouter;
