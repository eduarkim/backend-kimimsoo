import Tienda from '../../models/Tiendas.js';

const allTiendas = async (req, res) => {
    try {
        const all = await Tienda.find();
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

const tiendaByNombre = async (req, res) => {
    try {
        const nombreQuery = req.params.nombre;
        const tienda = await Tienda.findOne({ nombre: nombreQuery });
        if (tienda) {
            return res.status(200).json({ response: tienda });
        } else {
            return res.status(404).json({ response: 'Tienda no encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

const tiendaByDireccion = async (req, res) => {
    try {
        const direccionQuery = req.params.direccion;
        const tienda = await Tienda.findOne({ direccion: direccionQuery });
        if (tienda) {
            return res.status(200).json({ response: tienda });
        } else {
            return res.status(404).json({ response: 'Tienda no encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

export { allTiendas, tiendaByNombre, tiendaByDireccion };

