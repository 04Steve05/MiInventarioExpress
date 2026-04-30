const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.mostrarLogin);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.get('/chat', (req, res) => {
  if (!req.session.usuario) return res.redirect('/login');
  res.render('chat', { usuario: req.session.usuario });
});

module.exports = router;
