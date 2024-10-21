import express from 'express';
import { allProductos } from '../controllers/producto/read.js';
import { productoByNombre, productoByTipo, productoByPrecio } from '../controllers/producto/read.js';
import { create } from '../controllers/producto/create.js';

const routerProducto = express.Router();

routerProducto.get('/all', allProductos); // Obtener todos los productos
routerProducto.get('/nombre/:nombre', productoByNombre); // Obtener un producto por nombre
routerProducto.get('/tipo/:tipo', productoByTipo); // Obtener un producto por tipo
routerProducto.get('/precio/:precio', productoByPrecio); // Obtener un producto por precio


routerProducto.post('/create', create);
//routerProducto.post('createAll',)


export default routerProducto;