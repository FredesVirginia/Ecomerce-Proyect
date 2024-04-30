const { Router } = require("express");
const express = require("express");
const  multer = require("multer");
const upload = multer ({dest : 'uploads/'})
const {saveImage} = require("../middleware/helpers");
const {Sequelize} = require('sequelize');
const {User , Category , Product} = require('../db')
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const router = Router();
router.use(express.urlencoded({extends : false}));
router.use(express.json());


router.get("/", async (req, res) => {
    const products = await Product.findAll({
        include: {
            model: Category,
            attributes: ['name'],
        },
    });

    res.json(products)
});















module.exports = router;