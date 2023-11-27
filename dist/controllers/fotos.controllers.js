"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearFotos = exports.getFotos = void 0;
function getFotos(req, res) {
}
exports.getFotos = getFotos;
function crearFotos(req, res) {
    console.log('Guardando foto');
    console.log(req.body);
    return res.json({
        message: 'Foto guardada'
    });
}
exports.crearFotos = crearFotos;
