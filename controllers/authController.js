const Usuario = require('../models/Usuario');

exports.mostrarLogin = (req, res) => {
  if (req.session.usuario) return res.redirect('/productos');
  res.render('auth/login');
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.render('auth/login', { error: 'Usuario no encontrado' });
    const valido = await usuario.compararPassword(password);
    if (!valido) return res.render('auth/login', { error: 'Contraseña incorrecta' });
    req.session.usuario = { id: usuario._id, nombre: usuario.nombre, email: usuario.email };
    res.redirect('/productos');
  } catch (err) {
    res.status(500).send('Error al iniciar sesión');
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};
