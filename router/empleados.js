import express from 'express';
import { getEmpleados, addEmpleado } from '../controllers/empleados/read.js';

const routerEmpleados = express.Router();

routerEmpleados.get('/', getEmpleados); // Obtener todos los empleados

routerEmpleados.post('/create', create);
routerEmpleados.post('createAll',)

export default routerEmpleados;