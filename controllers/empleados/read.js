import Empleado from '../../models/Empleados.js';

// Obtener todos los empleados
let allEmpleados = async (req, res) => {
    try {
        let all = await Empleado.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })

    }
}

let empleadoByNombre = async (req, res) => {
    try {
        let nombreQuery = req.params.nombre;
        let empleado = await Empleado.findOne({ nombre: nombreQuery });
        if (empleado) {
            return res.status(200).json({ response: empleado });
        } else {
            return res.status(404).json({ response: 'Empleado no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}

let empleadoByCargo = async (req, res) => {
    try {
        let cargoQuery = req.params.cargo;
        let empleado = await Empleado.find({ cargo: cargoQuery });
        if (empleado) {
            return res.status(200).json({ response: empleado });
        } else {
            return res.status(404).json({ response: 'Empleado no encontrado' });
        }
    }
    catch (error) {
        return res.status(500).json({ response: error });
    }
}

let empleadoBySalario = async (req, res) => {
    try {
        let salarioQuery = req.params.salario;
        let empleado = await Empleado.find({ salario: salarioQuery });
        if (empleado) {
            return res.status(200).json({ response: empleado });
        } else {
            return res.status(404).json({ response: 'Empleado no encontrado' });
        }
    }
    catch (error) {
        return res.status(500).json({ response: error });
    }
}



export {allEmpleados, empleadoByNombre, empleadoByCargo, empleadoBySalario}