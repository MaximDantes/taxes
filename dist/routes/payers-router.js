"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var payers_controller_1 = __importDefault(require("../controllers/payers-controller"));
var payersRouter = express_1.default.Router();
payersRouter.get('/', payers_controller_1.default.getAll);
payersRouter.post('/', payers_controller_1.default.add);
exports.default = payersRouter;
