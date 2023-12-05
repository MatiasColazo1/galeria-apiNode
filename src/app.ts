import express from 'express';
import morgan from 'morgan';
import path from 'path'
import cors from 'cors';


const app = express();

import indexRoutes from './routes/index'

// settings
app.set('port', process.env.PORT || 3000)

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // Algunos navegadores antiguos (IE11) pueden requerir esto
};

app.use(cors(corsOptions));

// middlewars
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routes
app.use('/api', indexRoutes);

// la carpeta uploads es para almacenar imagenes
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;