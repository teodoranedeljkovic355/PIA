"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Subject = new Schema({
    name: {
        type: String
    },
    typeOfSubject: {
        type: String
    },
    yearOfStudies: {
        type: Number
    },
    department: {
        type: String
    },
    subjectCode: {
        type: String
    },
    classesFond: {
        type: Number
    },
    numberOfPoints: {
        type: Number
    },
    goalOfSubject: {
        type: String
    },
    outcomeOfSubject: {
        type: String
    },
    excerciseTerm: {
        type: String
    },
    lectureTerm: {
        type: String
    },
    propositions: {
        type: String
    },
    laboratory: {
        type: String
    },
    semester: {
        type: Number
    },
    master: {
        type: Number
    },
    v: {
        String
    },
    p: {
        type: String
    },
    l: {
        type: String
    },
    eq: {
        type: String
    },
    comment: {
        type: String
    },
    urlv: {
        type: String
    },
    urleq: {
        type: String
    }, urll: {
        type: String
    },
    urlp: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Subject', Subject, 'subjects');
//# sourceMappingURL=subject.js.map