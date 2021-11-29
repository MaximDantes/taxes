"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var regions_controller_1 = __importDefault(require("../controllers/regions-controller"));
var regionsRouter = express_1.default.Router();
regionsRouter.get('/', regions_controller_1.default.getAll);
regionsRouter.get('/:name', regions_controller_1.default.get);
regionsRouter.post('/', regions_controller_1.default.add);
exports.default = regionsRouter;
