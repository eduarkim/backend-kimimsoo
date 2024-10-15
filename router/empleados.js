import express from 'express';
import { getEmpleados, addEmpleado } from '../controllers/empleados/read.js';

const router = express.Router();

router.get('/', getEmpleados); // Obtener todos los empleados
router.post('/', addEmpleado); // Agregar un nuevo empleado

export default router;