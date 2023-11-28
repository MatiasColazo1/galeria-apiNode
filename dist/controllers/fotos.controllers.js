"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFotos = exports.deleteFotos = exports.crearFotos = exports.getFoto = exports.getFotos = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const Fotos_1 = __importDefault(require("../models/Fotos"));
async function getFotos(req, res) {
    const fotos = await Fotos_1.default.find();
    return res.json(fotos);
}
exports.getFotos = getFotos;
async function getFoto(req, res) {
    const { id } = req.params;
    const foto = await Fotos_1.default.findById(id);
    return res.json(foto);
}
exports.getFoto = getFoto;
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
;
async function deleteFotos(req, res) {
    const { id } = req.params;
    const foto = await Fotos_1.default.findByIdAndDelete(id);
    if (foto) {
        await fs_extra_1.default.unlink(path_1.default.resolve(foto.imagenPath));
    }
    return res.json({
        message: 'Foto eliminada',
        foto
    });
}
exports.deleteFotos = deleteFotos;
async function updateFotos(req, res) {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const updateFoto = await Fotos_1.default.findByIdAndUpdate(id, {
        titulo,
        descripcion
    }, { new: true });
    return res.json({
        message: 'Foto actualizada',
        updateFoto
    });
}
exports.updateFotos = updateFotos;
