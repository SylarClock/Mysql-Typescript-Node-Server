import { Router } from 'express'
import { deleteUsuario, getUsaurio, getUsaurios, postUsuario, putUsuario } from '../controller/usuarios';

const router = Router();

router.get( '/',        getUsaurios )
router.get( '/:id',     getUsaurio )

router.post( '/',       postUsuario )
router.put( '/:id',     putUsuario )
router.delete( '/:id',  deleteUsuario )


export default router;