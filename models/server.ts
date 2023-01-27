import express, { Application } from 'express'
import userRoutes from '../routes/usuario';
import cors from 'cors'
import db from '../db/connection';

class Server {
    
    private app:Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares();

        //definicion de rutas
        this.routes();
    }

    async dbConnection(){
        try {
            
            await db .authenticate();
            console.log("Database online");
            

        } catch (error) {
            console.log(error);
            throw new Error( 'COneccion fallando a la bd' );
        }
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        //PARSE BODY
        this.app.use( express.json() )//parsea el body en peticiones que se hagan

        //PUBLIC FOLDER
        this.app.use( express.static('public') )
    }

    routes(){

        this.app.use( this.apiPaths.usuarios, userRoutes )

    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Servidor corriendo en puerto ' + this.port);
            
        })
    }
}

export default Server;