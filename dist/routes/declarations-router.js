"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var declarations_controller_1 = require("../controllers/declarations-controller");
var declarationsRouter = express_1.default.Router();
declarationsRouter.get('/', declarations_controller_1.declarationsController.get);
declarationsRouter.post('/', declarations_controller_1.declarationsController.add);
exports.default = declarationsRouter;
