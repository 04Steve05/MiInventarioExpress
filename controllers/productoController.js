const Producto = require('../models/Producto');

exports.listarProductos = async (req, res) => {
  try {
    const productos = await Producto.find().lean();
    res.render('productos/index', {
      productos,
      usuario: req.session.usuario
    });
  } catch (err) {
    res.status(500).send('Error al obtener productos');
  }
};

exports.mostrarFormCrear = (req, res) => {
  res.render('productos/crear', { usuario: req.session.usuario });
};

exports.crearProducto = async (req, res) => {
  try {
    const { nombre, precio, descripcion } = req.body;
    const imagen = req.file ? req.file.filename : 'default.jpg';
    await Producto.create({ nombre, precio, descripcion, imagen });
    res.redirect('/productos');
  } catch (err) {
    res.status(500).send('Error al crear producto');
  }
};

exports.mostrarFormEditar = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id).lean();
    res.render('productos/editar', { producto, usuario: req.session.usuario });
  } catch (err) {
    res.status(500).send('Error al obtener producto');
  }
};

exports.editarProducto = async (req, res) => {
  try {
    const { nombre, precio, descripcion } = req.body;
    const datos = { nombre, precio, descripcion };
    if (req.file) datos.imagen = req.file.filename;
    await Producto.findByIdAndUpdate(req.params.id, datos);
    res.redirect('/productos');
  } catch (err) {
    res.status(500).send('Error al editar producto');
  }
};

exports.eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.redirect('/productos');
  } catch (err) {
    res.status(500).send('Error al eliminar producto');
  }
};
