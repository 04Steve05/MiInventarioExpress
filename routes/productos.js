const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const nombreUnico = Date.now() + '-' + file.originalname;
    cb(null, nombreUnico);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const permitidos = ['image/jpeg', 'image/png', 'image/jpg'];
    if (permitidos.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Solo se permiten imágenes JPG y PNG'));
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }
});

const manejarErrorMulter = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.render('productos/crear', {
        error: 'La imagen no puede pesar más de 5MB',
        usuario: req.session.usuario
      });
    }
  }
  next(err);
};

const validarProducto = [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio').isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),
  body('precio').notEmpty().withMessage('El precio es obligatorio').isFloat({ min: 0 }).withMessage('El precio debe ser positivo'),
  body('descripcion').notEmpty().withMessage('La descripción es obligatoria')
];

const verificarAuth = (req, res, next) => {
  if (!req.session.usuario) return res.redirect('/login');
  next();
};

router.get('/', productoController.listarProductos);
router.get('/crear', verificarAuth, productoController.mostrarFormCrear);
router.post('/crear', verificarAuth, upload.single('imagen'), validarProducto, productoController.crearProducto);
router.get('/editar/:id', verificarAuth, productoController.mostrarFormEditar);
router.post('/editar/:id', verificarAuth, upload.single('imagen'), validarProducto, productoController.editarProducto);
router.post('/eliminar/:id', verificarAuth, productoController.eliminarProducto);

module.exports = router;
