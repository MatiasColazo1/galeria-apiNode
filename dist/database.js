"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConection = void 0;
const mongoose_1 = require("mongoose");
async function startConection() {
    await (0, mongoose_1.connect)('mongodb://localhost/fotos-galeria-db', {});
    console.log('Base de datos conectado');
}
exports.startConection = startConection;
