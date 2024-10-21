import express from 'express';
import { allEmpleados, empleadoByNombre, empleadoByCargo, empleadoBySalario} from '../controllers/empleados/read.js';
import { create } from '../controllers/empleados/create.js';

const routerEmpleados = express.Router();

routerEmpleados.get('/all', allEmpleados); // Obtener todos los empleados
routerEmpleados.get('/nombre/:nombre', empleadoByNombre); // Obtener un empleado por nombre
routerEmpleados.get('/cargo/:cargo', empleadoByCargo); // Obtener un empleado por cargo
routerEmpleados.get('/salario/:salario', empleadoBySalario); // Obtener un empleado por salario



routerEmpleados.post('/create', create);
//routerEmpleados.post('createAll', createAll);

export default routerEmpleados;