import Empleado from "../../models/Empleado.js";
let create = async (req, res) => {
        
            try {
                let empleado = req.body
                let all = await Empleado.create(empleado);
                return res.status(201).json({ response: all });
                
            } catch (error) {
                res.status(500).json({ message: "Error al agregar empleado", error });
            }
        }

export {create}
