"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var taxes_controller_1 = __importDefault(require("../controllers/taxes-controller"));
var taxesRouter = express_1.default.Router();
taxesRouter.get('/', taxes_controller_1.default.getAll);
exports.default = taxesRouter;
