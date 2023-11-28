import { Router } from "express";
const router = Router();

import { crearFotos, getFotos, getFoto, deleteFotos, updateFotos } from "../controllers/fotos.controllers";

import multer from '../libs/multer'

router.route('/fotos')
    .get(getFotos)
    .post(multer.single('imagen') ,crearFotos)

router.route('/fotos/:id')
    .get(getFoto)
    .delete(deleteFotos)
    .put(updateFotos)


export default router;