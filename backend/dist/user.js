"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    index: {
        type: String
    },
    studiesType: {
        type: String
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    status: {
        type: String
    },
    numOfLogin: {
        type: Number
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
    picture: {
        type: String
    },
    employeeFlag: {
        type: Number
    },
    typeOf: {
        type: String
    },
    subjects: {
        type: Array
    },
    mail: {
        type: String
    }
});
exports.default = mongoose_1.default.model('User', User, 'users');
//# sourceMappingURL=user.js.map