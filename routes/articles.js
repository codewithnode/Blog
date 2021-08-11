const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article_controller');

router.get("/new", articleController.newarticle);
router.post("/submitarticle", articleController.savearticle);
router.get("/", articleController.home);
router.get("/edit/:id", articleController.editarticle);
router.get("/delete/:id", articleController.deletearticle);

module.exports = router;