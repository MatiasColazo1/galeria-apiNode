import { Request, Response } from "express"
import path from 'path'
import fs, { promises } from 'fs-extra'

import Fotos from "../models/Fotos";

export async function getFotos(req: Request, res: Response): Promise<Response>{
    const fotos = await Fotos.find();
    return res.json(fotos)
}

export async function getFoto(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;
    const foto = await Fotos.findById(id);
    return res.json(foto);
}

export async function crearFotos(req: Request, res: Response): Promise<Response>{

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
};

export async function deleteFotos(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const foto = await Fotos.findByIdAndDelete(id);
    if(foto) {
        await fs.unlink(path.resolve(foto.imagenPath))
    }
    return res.json({
        message: 'Foto eliminada',
        foto
    })
}

export async function updateFotos(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const updateFoto = await Fotos.findByIdAndUpdate(id, {
        titulo,
        descripcion
    });
    return res.json({
        message: 'Foto actualizada',
        updateFoto
    })
}
 