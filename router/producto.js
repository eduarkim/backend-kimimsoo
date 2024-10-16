import express from 'express';
import { getProductos, addProducto } from '../controllers/producto/read.js';

const routerProducto = express.Router();

routerProducto.get('/', getProductos); // Obtener todos los productos

routerProducto.post('/create', create);
routerProducto.post('createAll',)


export default routerProducto;