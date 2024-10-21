import 'dotenv/config.js';
import '../../config/database.js';
import Empleado from '../Empleados.js'; 

let empleados = [
    { nombre: "Juan Pérez", cargo: "Desarrollador", salario: 50000 },
    { nombre: "Ana Gómez", cargo: "Diseñadora", salario: 45000 },
    { nombre: "Luis Rodríguez", cargo: "Gerente", salario: 70000 },
    { nombre: "María López", cargo: "Analista", salario: 55000 },
    { nombre: "Carlos Fernández", cargo: "Tester", salario: 40000 },
    { nombre: "Laura Martínez", cargo: "Project Manager", salario: 65000 },
    { nombre: "Pedro Sánchez", cargo: "Desarrollador Frontend", salario: 52000 },
    { nombre: "Sofía Torres", cargo: "Desarrolladora Backend", salario: 53000 },
    { nombre: "Javier Morales", cargo: "DevOps", salario: 60000 },
    { nombre: "Clara Ruiz", cargo: "Marketing", salario: 48000 },
    { nombre: "Diego Jiménez", cargo: "Ventas", salario: 47000 },
    { nombre: "Valeria Castro", cargo: "Recursos Humanos", salario: 49000 },
    { nombre: "Fernando Ortega", cargo: "Contador", salario: 55000 },
    { nombre: "Gabriela Silva", cargo: "Asistente Administrativa", salario: 38000 },
    { nombre: "Rafael Ramírez", cargo: "Soporte Técnico", salario: 42000 }
];

// Insertar los empleados en la base de datos
Empleado.insertMany(empleados)
    .then(() => console.log("Empleados insertados"))
    .catch(error => console.error("Error al insertar empleados:", error));