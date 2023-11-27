import { Schema, model, Document } from "mongoose";

const schema = new Schema({
    titulo: String,
    descripcion: String,
    imagenPath: String
});

interface IFotos extends Document {
    titulo: string;
    descripcion: string;
    imagenPath: string;
}

export default model<IFotos>('Fotos', schema)