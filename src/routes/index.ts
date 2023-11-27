import { Router } from "express";
const router = Router();

import { crearFotos, getFotos } from "../controllers/fotos.controllers";

import multer from '../libs/multer'

router.route('/fotos')
    .post(multer.single('imagen') ,crearFotos)
    .get(getFotos)

export default router;