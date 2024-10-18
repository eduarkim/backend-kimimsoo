import express from 'express';
import { allEmpleados} from '../controllers/empleados/read.js';
import { create } from '../controllers/empleados/create.js';

const routerEmpleados = express.Router();

routerEmpleados.get('/all', allEmpleados); // Obtener todos los empleados

routerEmpleados.post('/create', create);
//routerEmpleados.post('createAll', createAll);

export default routerEmpleados;