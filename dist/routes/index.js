"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const fotos_controllers_1 = require("../controllers/fotos.controllers");
const multer_1 = __importDefault(require("../libs/multer"));
router.route('/fotos')
    .post(multer_1.default.single('imagen'), fotos_controllers_1.crearFotos)
    .get(fotos_controllers_1.getFotos);
exports.default = router;
