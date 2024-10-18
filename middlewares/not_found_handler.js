const not_found_handler = (req, res, next) => {
    return res.status(404).json({ 
        success: false,
        message: `Not Found - La peticion con el metodo ${req.method} con la ruta ${req.url}`
         });
};

export default not_found_handler;