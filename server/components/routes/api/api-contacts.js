/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

const controller = require('../../controllers/api/contactController')

router.get('/', controller.list);
router.post('/create', controller.create);
router.get('/read/:id', controller.read);
router.put('/update', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;