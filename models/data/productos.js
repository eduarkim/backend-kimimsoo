import 'dotenv/config.js';
import '../../config/database.js';
import Producto from '../Producto.js'; 

let productos = [
    { nombre: "Cámara Digital", marca: "Canon", tipo: "Electrónica", precio: 599.99 },
    { nombre: "Smartphone", marca: "Samsung", tipo: "Electrónica", precio: 799.99 },
    { nombre: "Laptop", marca: "Apple", tipo: "Electrónica", precio: 1299.99 },
    { nombre: "Auriculares Inalámbricos", marca: "Sony", tipo: "Accesorios", precio: 199.99 },
    { nombre: "Reloj Inteligente", marca: "Fitbit", tipo: "Electrónica", precio: 149.99 },
    { nombre: "Televisor 4K", marca: "LG", tipo: "Electrónica", precio: 899.99 },
    { nombre: "Tablet", marca: "Microsoft", tipo: "Electrónica", precio: 499.99 },
    { nombre: "Altavoz Bluetooth", marca: "JBL", tipo: "Accesorios", precio: 89.99 },
    { nombre: "Cámara de Seguridad", marca: "Ring", tipo: "Electrónica", precio: 249.99 },
    { nombre: "Proyector Portátil", marca: "Epson", tipo: "Electrónica", precio: 399.99 },
    { nombre: "Impresora Multifuncional", marca: "HP", tipo: "Electrónica", precio: 299.99 },
    { nombre: "Teclado Mecánico", marca: "Logitech", tipo: "Accesorios", precio: 129.99 },
    { nombre: "Ratón Gamer", marca: "Razer", tipo: "Accesorios", precio: 89.99 },
    { nombre: "Monitor Curvo", marca: "Samsung", tipo: "Electrónica", precio: 349.99 },
    { nombre: "Silla Gamer", marca: "DXRacer", tipo: "Muebles", precio: 399.99 },
    { nombre: "Mesa de Oficina", marca: "IKEA", tipo: "Muebles", precio: 199.99 },
    { nombre: "Bicicleta de Montaña", marca: "Trek", tipo: "Deportes", precio: 599.99 },
    { nombre: "Patín Eléctrico", marca: "Xiaomi", tipo: "Deportes", precio: 499.99 },
    { nombre: "Cafetera Automática", marca: "De'Longhi", tipo: "Electrodomésticos", precio: 249.99 },
    { nombre: "Batidora de Mano", marca: "Braun", tipo: "Electrodomésticos", precio: 59.99 },
    { nombre: "Aspiradora Robotizada", marca: "iRobot Roomba", tipo:"Electrodomésticos" ,precio :299.99},
    { nombre:"Horno Microondas" ,marca:"Panasonic" ,tipo:"Electrodomésticos" ,precio :179.99},
    { nombre:"Refrigerador" ,marca:"Whirlpool" ,tipo:"Electrodomésticos" ,precio :899.99},
    { nombre:"Secadora" ,marca:"LG" ,tipo:"Electrodomésticos" ,precio :699.99},
    { nombre:"Lavadora" ,marca:"Samsung" ,tipo:"Electrodomésticos" ,precio :499.99},
    { nombre:"Plancha de Vapor" ,marca:"Philips" ,tipo:"Electrodomésticos" ,precio :79.99},
    {nombre:"Cámara Instantánea" ,marca:"Fujifilm" ,tipo:"Fotografía" ,precio :129.99},
    {nombre:"Dron" ,marca:"DJI" ,tipo:"Fotografía" ,precio :799.99},
    {nombre:"Gafas VR" ,marca:"Oculus" ,tipo:"Tecnología" ,precio :299.99},
    {nombre:"Robot Educativo" ,marca:"LEGO" ,tipo:"Juguetes" ,precio :199.99},
    {nombre:"Consola de Videojuegos" ,marca:"Sony" ,tipo:"Videojuegos" ,precio :399.99},
    {nombre:"Impresora 3D" ,marca:"Creality" ,tipo:"Tecnología" ,precio :299.99},
    {nombre:"Smartwatch" ,marca:"Huawei" ,tipo:"Tecnología" ,precio :199.99},
    {nombre:"Cámara Deportiva" ,marca:"GoPro" ,tipo:"Fotografía" ,precio :299.99},
    {nombre:"Cámara de Vigilancia" ,marca:"Arlo" ,tipo:"Electrónica" ,precio :199.99},
    {nombre:"Cámara Réflex" ,marca:"Nikon" ,tipo:"Fotografía" ,precio :699.99},
    {nombre:"Cámara de Video" ,marca:"Panasonic" ,tipo:"Electrónica" ,precio :499.99},
    {nombre:"Micrófono de Estudio" ,marca:"Blue" ,tipo:"Audio" ,precio :99.99},
    {nombre:"Auriculares con Cable" ,marca:"Beats" ,tipo:"Audio" ,precio :149.99},
    {nombre:"Altavoces de Estudio" ,marca:"KRK" ,tipo:"Audio" ,precio :199.99},
    {nombre:"Teclado Inalámbrico" ,marca:"Microsoft" ,tipo:"Accesorios" ,precio :49.99},
    {nombre:"Mousepad Gamer" ,marca:"Corsair" ,tipo:"Accesorios" ,precio :19.99},
    {nombre:"Silla de Oficina" ,marca:"Steelcase" ,tipo:"Muebles" ,precio :499.99},
    {nombre:"Sofá de Sala" ,marca:"IKEA" ,tipo:"Muebles" ,precio :799.99},
    {nombre:"Mesa de Centro" ,marca:"West Elm" ,tipo:"Muebles" ,precio :299.99},
    {nombre:"Lámpara de Pie" ,marca:"Lumina" ,tipo:"Iluminación" ,precio :99.99},
    {nombre:"Lámpara de Escritorio" ,marca:"Philips Hue" ,tipo:"Iluminación" ,precio :49.99},
    {nombre:"Bombilla Inteligente" ,marca:"TP-Link" ,tipo:"Iluminación" ,precio :19.99},
    {nombre:"Ventilador de Torre" ,marca:"Dyson" ,tipo:"Electrodomésticos" ,precio :399.99},
    {nombre:"Calefactor Eléctrico" ,marca:"De'Longhi" ,tipo:"Electrodomésticos"
    ,precio :149.99},
    {nombre:"Plancha de Pelo" ,marca:"GHD" ,tipo:"Belleza" ,precio :199.99},
    {nombre:"Secadora de Pelo" ,marca:"Dyson" ,tipo:"Belleza" ,precio :399.99},
    {nombre:"Cortadora de Barba" ,marca:"Philips Norelco" ,tipo:"Belleza" ,precio :49.99},
    {nombre:"Plancha de Ropa" ,marca:"Rowenta" ,tipo:"Electrodomésticos" ,precio :69.99},
    {nombre:"Cafetera Express" ,marca:"Breville" ,tipo:"Electrodomésticos" ,precio :299.99},
    {nombre:"Licuadora" ,marca:"Vitamix" ,tipo:"Electrodomésticos" ,precio :399.99},
    {nombre:"Tostadora" ,marca:"Cuisinart" ,tipo:"Electrodomésticos" ,precio :49.99},
    {nombre:"Hervidor de Agua" ,marca:"Hamilton Beach" ,tipo:"Electrodomésticos"},
    {nombre:"Freidora de Aire" ,marca:"Ninja" ,tipo:"Electrodomésticos" ,precio :99.99},
    {nombre:"Batidora de Vaso" ,marca:"Oster" ,tipo:"Electrodomésticos" ,precio :79.99},
    {nombre:"Máquina de Helados" ,marca:"Cuisinart" ,tipo:"Electrodomésticos" ,precio :59.99},
    {nombre:"Máquina de Palomitas" ,marca:"Nostalgia" ,tipo:"Electrodomésticos",precio :39.99},
    {nombre:"Máquina de Algodón de Azúcar" ,marca:"Clevr" ,tipo:"Electrodomésticos" ,precio :49.99},
    {nombre:"Máquina de Café" ,marca:"Keurig" ,tipo:"Electrodomésticos" ,precio :99.99},
    {nombre:"Máquina de Coser" ,marca:"Singer" ,tipo:"Electrodomésticos" ,precio :199.99},
    {nombre:"Máquina de Ejercicio" ,marca:"Peloton" ,tipo:"Deportes" ,precio :1999.99},
    {nombre:"Máquina de Remo" ,marca:"Concept2" ,tipo:"Deportes" ,precio :999.99},
    {nombre:"Máquina de Pesas" ,marca:"Bowflex" ,tipo:"Deportes" ,precio :499.99},
    {nombre:"Máquina de Abdominales" ,marca:"Ab Coaster" ,tipo:"Deportes" ,precio :299.99},
    {nombre:"Máquina de Escaleras" ,marca:"StairMaster" ,tipo:"Deportes" ,precio :799.99},
    {nombre:"Máquina de Pilates" ,marca:"Balanced Body" ,tipo:"Deportes" ,precio :599.99},
    {nombre:"Máquina de Masajes" ,marca:"Theragun" ,tipo:"Salud" ,precio :299.99},
    {nombre:"Máquina de Terapia" ,marca:"Hyperice" ,tipo:"Salud" ,precio :399.99},
    {nombre:"Máquina de Oxígeno" ,marca:"Inogen" ,tipo:"Salud" ,precio :499.99},
    {nombre:"Máquina de Diálisis" ,marca:"NxStage" ,tipo:"Salud" ,precio :599.99},
    {nombre:"Máquina de Análisis" ,marca:"Roche" ,tipo:"salud" ,precio :699.99},
    {nombre:"Máquina de Rayos X" ,marca:"Siemens" ,tipo:"Salud" ,precio :799.99},
    {nombre:"Máquina de Ultrasonido" ,marca:"GE" ,tipo:"Salud" ,precio :899.99},
    {nombre:"Máquina de Resonancia" ,marca:"Philips" ,tipo:"Salud" ,precio :999.99},
    {nombre:"Máquina de Tomografía" ,marca:"Canon" ,tipo:"Salud" ,precio :1099.99},
    {nombre:"Máquina de Electrocardiograma" ,marca:"Zoll" ,tipo:"Salud" ,precio :1199.99},
    {nombre:"Máquina de Electroencefalograma" ,marca:"Nihon Kohden" ,tipo:"Salud" ,precio :1299.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Fresenius" ,tipo:"Salud" ,precio :1399.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Baxter" ,tipo:"Salud" ,precio :1499.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Medtronic" ,tipo:"Salud" ,precio :1599.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"B. Braun" ,tipo:"Salud" ,precio :1699.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Nipro" ,tipo:"Salud" ,precio :1799.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Nikkiso" ,tipo:"Salud" ,precio :1899.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Toray" ,tipo:"Salud" ,precio :1999.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Bellco" ,tipo:"Salud" ,precio :2099.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Asahi Kasei" ,tipo:"Salud" ,precio :2199.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Jafron" ,tipo:"Salud" ,precio :2299.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"NxStage" ,tipo:"Salud" ,precio :2399.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Quanta" ,tipo:"Salud" ,precio :2499.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Weigao" ,tipo:"Salud" ,precio :2599.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"JMS" ,tipo:"Salud" ,precio :2699.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Farmasol" ,tipo:"Salud" ,precio :2799.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Baxter" ,tipo:"Salud" ,precio :2899.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Medtronic" ,tipo:"Salud" ,precio :2999.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"B. Braun" ,tipo:"Salud" ,precio :3099.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Nipro" ,tipo:"Salud" ,precio :3199.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Nikkiso" ,tipo:"Salud" ,precio :3299.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Toray" ,tipo:"Salud" ,precio :3399.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Bellco" ,tipo:"Salud" ,precio :3499.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Asahi Kasei" ,tipo:"Salud" ,precio :3599.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Jafron" ,tipo:"Salud" ,precio :3699.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"NxStage" ,tipo:"Salud" ,precio :3799.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Quanta" ,tipo:"Salud" ,precio :3899.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Weigao" ,tipo:"Salud" ,precio :3999.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"JMS" ,tipo:"Salud" ,precio :4099.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Farmasol" ,tipo:"Salud" ,precio :4199.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Baxter" ,tipo:"Salud" ,precio :4299.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Medtronic" ,tipo:"Salud" ,precio :4399.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"B. Braun" ,tipo:"Salud" ,precio :4499.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Nipro" ,tipo:"Salud" ,precio :4599.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Nikkiso" ,tipo:"Salud" ,precio :4699.99},
    {nombre:"Máquina de Hemodiálisis" ,marca:"Toray" ,tipo:"Salud" ,precio :4799.99},
    {nombre:"Escritorio de Oficina" ,marca:"Herman Miller" ,tipo:"Muebles" ,precio :399.99},
    

  
   ...Array.from({ length :70 }, (_, i) => ({
        nombre:`Producto ${i + 11}`,
        marca:`Marca ${i + 1}`,
        tipo:`Tipo ${i % 5}`,
        precio:(Math.random() * (1000 - 10) + 10).toFixed(2) // Precio aleatorio entre $10 y $1000
   }))
];

// Insertar los productos en la base de datos
Producto.insertMany(productos)
   .then(() => console.log("Productos insertados"))
   .catch(error => console.error("Error al insertar productos:", error));