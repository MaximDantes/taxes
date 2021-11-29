"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var kinds_of_activity_controller_1 = __importDefault(require("../controllers/kinds-of-activity-controller"));
var kindsOfActivityRouter = express_1.default.Router();
kindsOfActivityRouter.get('/', kinds_of_activity_controller_1.default.getAll);
kindsOfActivityRouter.get('/:kindOfActivityId', kinds_of_activity_controller_1.default.getByPayerId);
kindsOfActivityRouter.post('/', kinds_of_activity_controller_1.default.add);
exports.default = kindsOfActivityRouter;
