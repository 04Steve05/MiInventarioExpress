const mongoose = require('mongoose');
const Usuario = require('./models/Usuario');
const Producto = require('./models/Producto');
require('dotenv').config();

const ejecutarSeed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a MongoDB Atlas');

    await Usuario.deleteMany();
    await Producto.deleteMany();
    console.log('Datos anteriores eliminados');

    await Usuario.create([
      {
        nombre: 'Administrador',
        email: 'admin@inventario.com',
        password: '1234'
      },
      {
        nombre: 'Usuario Prueba',
        email: 'usuario@inventario.com',
        password: '1234'
      }
    ]);
    console.log('Usuarios creados');

    await Producto.create([
      {
        nombre: 'Laptop Dell',
        precio: 850,
        descripcion: 'Laptop Dell Inspiron 15 pulgadas, 8GB RAM, 256GB SSD',
        imagen: 'default.jpg'
      },
      {
        nombre: 'Mouse Inalambrico',
        precio: 25,
        descripcion: 'Mouse inalambrico Logitech, conexion USB, 3 botones',
        imagen: 'default.jpg'
      },
      {
        nombre: 'Teclado Mecanico',
        precio: 65,
        descripcion: 'Teclado mecanico RGB, switches azules, español',
        imagen: 'default.jpg'
      },
      {
        nombre: 'Monitor 24 pulgadas',
        precio: 320,
        descripcion: 'Monitor Full HD 1080p, 75Hz, panel IPS',
        imagen: 'default.jpg'
      },
      {
        nombre: 'Auriculares Bluetooth',
        precio: 45,
        descripcion: 'Auriculares inalambricos con cancelacion de ruido',
        imagen: 'default.jpg'
      }
    ]);
    console.log('Productos creados');

    console.log('');
    console.log('Seed completado exitosamente');
    console.log('');
    console.log('Usuarios de prueba:');
    console.log('   Email: admin@inventario.com');
    console.log('   Contrasena: 1234');
    console.log('');
    console.log('   Email: usuario@inventario.com');
    console.log('   Contrasena: 1234');

    process.exit(0);
  } catch (error) {
    console.error('Error en seed:', error);
    process.exit(1);
  }
};

ejecutarSeed();
