import Producto from '../../models/Producto.js';

// Obtener todos los productos
let allProductos = async (req, res) => {
    try {
        let all = await Producto.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })

    }
}

let productoByNombre = async (req, res) => {
    try {
        let nombreQuery = req.params.nombre;
        let producto = await Producto.findOne({ nombre: nombreQuery });
        if (producto) {
            return res.status(200).json({ response: producto });
        } else {
            return res.status(404).json({ response: 'Producto no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}

let productoByTipo = async (req, res) => {
    try {
        let tipoQuery = req.params.tipo;
        let producto = await Producto.find({ tipo: tipoQuery });
        if (producto) {
            return res.status(200).json({ response: producto });
        } else {
            return res.status(404).json({ response: 'Producto no encontrado' });
        }
    }
    catch (error) {
        return res.status(500).json({ response: error });
    }
}

let productoByPrecio = async (req, res) => {
    try {
        let precioQuery = req.params.precio;
        let producto = await Producto.find({ precio: precioQuery });
        if (producto) {
            return res.status(200).json({ response: producto });
        } else {
            return res.status(404).json({ response: 'Producto no encontrado' });
        }
    }
    catch (error) {
        return res.status(500).json({ response: error });
    }
}


export {allProductos, productoByNombre, productoByTipo, productoByPrecio}

