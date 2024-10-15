import express from 'express';
import { getProductos, addProducto } from '../controllers/producto/read.js';

const router = express.Router();

router.get('/', getProductos); // Obtener todos los productos
router.post('/', addProducto); // Agregar un nuevo producto

export default router;