const { Router } = require("express");
const express = require("express");
const  multer = require("multer");
const upload = multer ({dest : 'uploads/'})
const {saveImage} = require("../middleware/helpers");
const jwt = require ('jsonwebtoken');
require('dotenv').config();

const router = Router();
router.use(express.urlencoded({extends : false}));
router.use(express.json());
router.get("/", async (req, res) => {
    res.send("Hola Jarry")
});

router.get("/login" , (req, res) =>{
    res.send(`<html>
    <head> <title>Login</title></head>
    <body>
        <form method="POST" action="/users/auth">
        Nombre Usuario <input  type="text" name ="name"/><br/>
        Clave <input type="text" name="clave"/>
        <input type="submit" value="Iniciar Sesion"/>
        </form>
    </body>
    </html>`);
});

function generateAccessToken(user){
    return jwt.sign(user , process.env.SECRET )
}


function validateToken(req, res , next){
    const accessToken = req.headers['authorization'];
    if(!accessToken) res.send("Access Denige");

    jwt.verify(accessToken , process.env.SECRET , (err , user)=>{
        if(err){
            res.send("Acess denegado")
        }else{
            next();
        }
    } )

}
router.post("/auth" , (req,res)=>{
    const { name , clave} = req.body;
    //consulata a BBDD de verificar que escixten

    const user = {username : name};
    const accessToken = generateAccessToken(user);
    res.header('authorization' , accessToken).json({
        massage:"Usuario autenticado",
        token:accessToken
    })
});
router.get("/dashboard" ,validateToken, async (req, res)=>{
    res.send("Hola Has Ingresado Secion al Dashboard")
});


router.post('/test-upload', upload.single('imagen'), async (req, res) => {
    try {
        console.log(req.file)
        saveImage(req.file);
        res.send("Subio Imagen")
    }catch(error){
        console.log("El error fue" , error);
        res.send(error);
    }
})










module.exports = router;