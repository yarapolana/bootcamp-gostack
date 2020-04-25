"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloYara(request, response) {
    var user = CreateUser_1.default({
        name: "Yara",
        email: "yara@yara.is",
        password: "123123",
    });
    return response.json({ message: "Typescript Yara" });
}
exports.helloYara = helloYara;
