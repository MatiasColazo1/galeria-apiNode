import { Request, Response } from "express"

export function getFotos(req: Request, res: Response){

}

export function crearFotos(req: Request, res: Response){

    console.log('Guardando foto')
    console.log(req.body)

    return res.json({
        message: 'Foto guardada'
    })
}
