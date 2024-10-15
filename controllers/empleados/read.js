import Empleado from '../../models/Empleados.js';

// Obtener todos los empleados
export const getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find(); // Obtener todos los empleados desde MongoDB
        res.status(200).json(empleados);
    } catch (error) {
        console.error("Error al obtener empleados:", error);
        res.status(500).json({ message: "Error al obtener empleados" });
    }
};

// Agregar un nuevo empleado
export const addEmpleado = async (req, res) => {
    const { nombre, cargo, salario } = req.body;

    const nuevoEmpleado = new Empleado({ nombre, cargo, salario });

    try {
        await nuevoEmpleado.save(); // Guardar el empleado en MongoDB
        res.status(201).json(nuevoEmpleado);
    } catch (error) {
        console.error("Error al agregar empleado:", error);
        res.status(400).json({ message: "Error al agregar empleado" });
    }
};