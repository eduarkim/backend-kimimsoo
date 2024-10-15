import { Router } from 'express';
import userRouter from './users.js';
import tiendaRouter from './tiendas.js';
import productoRouter from './productos.js';
import empleadoRouter from './empleados.js';


const router = Router();

router.use('/users', userRouter);
router.use('/tiendas', tiendaRouter);
router.use('/productos', productoRouter);
router.use('/empleados', empleadoRouter);
export default router;