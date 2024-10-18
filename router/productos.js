import express from 'express';
import { allProductos } from '../controllers/producto/read.js';

const routerProducto = express.Router();

routerProducto.get('/all', allProductos); // Obtener todos los productos

//routerProducto.post('/create', create);
routerProducto.post('createAll',)


export default routerProducto;