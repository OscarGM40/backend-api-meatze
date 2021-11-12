import { Router } from 'express';
const router = Router();
import * as pantallasController from '../controllers/pantallas.controller';
import isValidToken from '../middlewares/validateToken';
import { isValidRole } from '../middlewares/validateRole';

/*Cuando se llama a un archivo se puede traer sin desestructurar solo la que este exportada por default */

router.get('/pantallas',  pantallasController.getPantallas);
router.get('/pantallas/:id',  pantallasController.getPantalla);
router.post('/pantallas',  isValidRole, pantallasController.createPantalla);
router.put('/pantallas/:id',  pantallasController.updatePantalla);
router.delete('/pantallas/:id',   isValidRole, pantallasController.deletePantalla);

// rutas especiales
router.put('/pantallas/insertarlista/:id',  pantallasController.insertarLista);
router.put('/pantallas/eliminarlista/:id',  pantallasController.eliminarLista);


export default router;