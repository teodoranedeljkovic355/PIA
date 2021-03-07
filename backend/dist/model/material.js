"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Material = new Schema({
    sifra: {
        type: String
    },
    tip: {
        type: String
    },
    ime_fajla: {
        type: String
    },
    velicina: {
        type: String
    },
    username: {
        type: String
    },
    tekst: {
        type: String
    },
});
exports.default = mongoose_1.default.model('Material', Material, 'materials');
//# sourceMappingURL=material.js.map