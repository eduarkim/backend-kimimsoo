const error_handler =(error, req, res, next) => {
    console.log(error);
    return res.status(500).json({ 
        success: false,
        response: error,
        message: "Error en el servidor"
        
    });
}
export default error_handler;
/*
return res.status(500).json({ 
    success: false,
    response: error,
    message: "Error en el servidor"
    
});
*/