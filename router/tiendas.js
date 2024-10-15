import { Router } from 'express';
import { allTiendas, tiendasByNombre, tiendaByDireccion} from '../controllers/tiendas/read.js';
//import router from './index.js';

const router = Router();

router.get('/all', allTiendas); // Endpoint para obtener todas las tiendas
router.get('/nombre/:nombre', tiendasByNombre); // Endpoint para obtener una tienda por nombre
router.get('/direccion/:direccion', tiendaByDireccion); // Endpoint para obtener una tienda por dirección

export default router; // Exportar el router