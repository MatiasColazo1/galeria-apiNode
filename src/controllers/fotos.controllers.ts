import { Request, Response } from "express"

import Fotos from "../models/Fotos";

export function getFotos(req: Request, res: Response){

}

export async function crearFotos(req: Request, res: Response){

    const { titulo, descripcion } = req.body;
    const newFoto = {
        titulo: titulo,
        descripcion: descripcion,
        imagenPath: req.file?.path
    };
    const foto = new Fotos(newFoto);
    await foto.save();
    return res.json({
        message: 'Foto guardada',
        foto
    })
}
