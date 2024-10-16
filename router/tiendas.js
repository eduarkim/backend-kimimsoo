import { Router } from 'express';
import { allTiendas, tiendasByNombre, tiendaByDireccion} from '../controllers/tiendas/read.js';
//import router from './index.js';

const routerTiendas = Router();

routerTiendas.get('/all', allTiendas); // Endpoint para obtener todas las tiendas
routerTiendas.get('/nombre/:nombre', tiendasByNombre); // Endpoint para obtener una tienda por nombre
routerTiendas.get('/direccion/:direccion', tiendaByDireccion); // Endpoint para obtener una tienda por dirección
routerTiendas.post('/create', create);
routerTiendas.post('createAll',)

export default routerTiendas; // Exportar el router