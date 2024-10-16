import { Router } from 'express';
import usersRouter from './users.js';
import tiendaRouter from './tiendas.js';
import productoRouter from './productos.js';
import empleadoRouter from './empleados.js';


const routerIndex = Router()

routerIndex.use('/users', usersRouter)
routerIndex.use('/tiendas', tiendaRouter);
routerIndex.use('/productos', productoRouter);
routerIndex.use('/empleados', empleadoRouter);

export default routerIndex

