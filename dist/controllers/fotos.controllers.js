"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearFotos = exports.getFotos = void 0;
const Fotos_1 = __importDefault(require("../models/Fotos"));
function getFotos(req, res) {
}
exports.getFotos = getFotos;
async function crearFotos(req, res) {
    const { titulo, descripcion } = req.body;
    const newFoto = {
        titulo: titulo,
        descripcion: descripcion,
        imagenPath: req.file?.path
    };
    const foto = new Fotos_1.default(newFoto);
    await foto.save();
    return res.json({
        message: 'Foto guardada',
        foto
    });
}
exports.crearFotos = crearFotos;
