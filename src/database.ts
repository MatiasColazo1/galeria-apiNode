import { connect } from 'mongoose'

export async function startConection() {
    await connect('mongodb://localhost/fotos-galeria-db', {

    });
    console.log('Base de datos conectado')
}

