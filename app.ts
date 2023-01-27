import dotenv from 'dotenv';
import Server from './models/server';
dotenv.config();

//Configurar dot.env
const server = new Server();

server.listen();