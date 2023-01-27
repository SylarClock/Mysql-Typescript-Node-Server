import { Request, Response } from "express";
import Usuario from "../models/usuario";


export const getUsaurios = async (req: Request, res: Response)=>{

    const usuarios = await Usuario.findAll();

    res.json( usuarios )
}

export const getUsaurio = async(req: Request, res: Response)=>{
    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );

    if( usuario ){
        res.json( usuario );
    }else{
        res.status(404).json({
            msg: `User id ${ id } doesn't exist`
        })
    }


}

export const postUsuario = async (req: Request, res: Response)=>{

    const { body } = req;

    try {

        const existEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if( existEmail ){
            return res.status(400).json({
                msg: `Ya existe un usuario con el email ${ body.email }`
            })
        }

        const usuario = Usuario.build( body );
        usuario.save();

        res.json( usuario )
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Something goes wrong'
        })
        
    }


}

export const putUsuario= async(req: Request, res: Response)=>{

    const { id } = req.params;
    const { body } = req;

    try {

        const usuario = await Usuario.findByPk( id );
        if( !usuario ){
            return res.status(404).json({
                msg: `No existe un usuario con el id ${ id } `
            })
        }

        await usuario.update(body)
        return res.json( usuario );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Something goes wrong'
        })
        
    }

    res.json({
        msg: 'postUsuario',
        body,
        id
    })

}

export const deleteUsuario = async(req: Request, res: Response)=>{

    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );
    if( !usuario ){
        return res.status(404).json({
            msg: `No existe un usuario con el id ${ id } `
        })
    }

    //await usuario?.destroy()
    await usuario.update({ estado: false })

    res.json(usuario)

}