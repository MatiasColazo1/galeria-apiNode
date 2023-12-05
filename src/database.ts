import { connect } from 'mongoose'

export async function startConection() {
    await connect('mongodb+srv://maticolazo97:fSHFA0cAGRjVigoz@galeria-fotos.jvxplj4.mongodb.net/', {

    });
    console.log('Base de datos conectado')
}

