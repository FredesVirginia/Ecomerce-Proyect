const { Router } = require("express");
const express = require("express");
const  multer = require("multer");
const upload = multer ({dest : 'uploads/'})
const {saveImage} = require("../middleware/helpers");
const {Sequelize} = require('sequelize');
const {User , Category} = require('../db')
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const router = Router();
router.use(express.urlencoded({extends : false}));
router.use(express.json());


router.get("/", async (req, res) => {
    const category = await Category.findAll();

    res.json(category);
});


router.post("/crearCategoria" ,async ( req, res)=>{
   try{
    const { name } = req.body;

    const newCategory = await Category.create({name});
   
    res.json(newCategory);
   }catch(error) {
        console.log("Error en lel BACK POST CATEGORY" , error);
        res.status(500);
   }
});












module.exports = router;