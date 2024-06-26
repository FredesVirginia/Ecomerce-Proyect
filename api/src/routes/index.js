const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const userRouter = require("./user")
const categoryRouter = require("./category");
const productRouter = require("./product");
const {upload , uploadMultiple} = require("../middleware/multer");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/users" , userRouter);
router.use("/category" , categoryRouter);
router.use("/products" , productRouter);

module.exports = router;
