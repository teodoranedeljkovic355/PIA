"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Employee = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    adress: {
        type: String
    },
    mobilePhone: {
        type: String
    },
    website: {
        type: String
    },
    personalData: {
        type: String
    },
    profession: {
        type: String
    },
    roomNumber: {
        type: String
    },
    status: {
        type: String
    },
    numOfLogin: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Employee', Employee, 'employees');
//# sourceMappingURL=employee.js.map