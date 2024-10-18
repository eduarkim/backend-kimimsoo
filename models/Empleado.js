import mongoose from 'mongoose';

// Definición del esquema para Empleado
const empleadoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    salario: { type: Number, required: true },
});

// Crear el modelo Empleado
const Empleado = mongoose.model('Empleado', empleadoSchema);

export default Empleado;