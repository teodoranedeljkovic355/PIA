"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Notification = new Schema({
    text: {
        type: String
    },
    date: {
        type: Date
    },
    title: {
        type: String
    },
    subjects: {
        type: Array
    },
    picture: {
        type: String
    },
    username: {
        type: String
    },
    url: {
        type: String
    },
    flagD: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Notification', Notification, 'notifications');
//# sourceMappingURL=notification.js.map