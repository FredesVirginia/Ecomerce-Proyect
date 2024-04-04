const { Router } = require("express");
const express = require("express");
const  multer = require("multer");
const upload = multer ({dest : 'uploads/'})
const {saveImage} = require("../middleware/helpers");
const {Sequelize} = require('sequelize');
const {User} = require('../db')
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const router = Router();
router.use(express.urlencoded({extends : false}));
router.use(express.json());
router.get("/", async (req, res) => {
    res.send("Hola Jarry")
});

router.post("/login" , async (req, res)=>{
    const { email, password } = req.body;

    try {
        // Buscar el usuario en la base de datos por su correo electrónico
        const user = await User.findOne({ where: { email } });

        // Si no se encuentra el usuario, devolver un mensaje de error
        if (!user) {
            return res.status(401).json({ message: "Correo electrónico o contraseña incorrectos" });
        }

        // Verificar la contraseña del usuario
        const passwordMatch = await bcrypt.compare(password, user.password);

        // Si las contraseñas no coinciden, devolver un mensaje de error
        if (!passwordMatch) {
            return res.status(401).json({ message: "Correo electrónico o contraseña incorrectos" });
        }

        // Si las credenciales son válidas, generar un token JWT
        const token = jwt.sign({ id: user.id, email: user.email }, 'secreto');

        // Devolver el token como respuesta
        res.json({ token });
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
    
    
});

router.post("/register" , async(req , res)=>{
   try{
    const { name, surname , phone, email, address, password  , birthday } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // El segundo argumento es el número de rondas de hashing

    // Crear un nuevo usuario con la contraseña encriptada
    let newUser = await User.create({ name, surname, phone, email, address, password: hashedPassword, birthday });
    console.log("EL video juego es ", newUser)
    let user = await User.findAll();
    
    res.status(200).json(user);
   }catch(error){
        res.status(500)
        console.log("EL error fue " , error);
   }
});



router.post("/", async (req , res)=>{
    try {
          const { name, rating , released, description, genero , plataforma } = req.body;
          let image = "https://www.semana.com/resizer/zpFAqbo5FBPBFoXFqFO9GQTPi8o=/1920x1080/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/DD5X25JSKJEZ5JDYZAHJH4S27M.jpg";
          let newVideogame = await Videogame.create({ name,  rating, image,released , description});
          let platform = await Platforms.create({ name : plataforma}) ;
          let genre =  await Genres.create({name : genero})     ;  
          newVideogame.addPlatforms(platform);
          newVideogame.addGenres(genre);

          let videogame = await Videogame.findAll( {
            include: [
              {
                model: Platforms,
                attributes: ['name'],
                through: {
                  attributes: []
                }
              },
              {
                model: Genres,
                attributes: ['name'],
                through: {
                  attributes: []
                }
              }
            ]
          });
          console.log("EL video juego es ", videogame)
          res.status(200).json(videogame);
    } catch(error){
        res.status(404).send("Informe de errores desde el Banck" , error)
    }

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