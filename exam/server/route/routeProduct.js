const express =require("express")
const { getProd, getProdById, deleteProdById, postProd } = require("../controller/controllerApi")

const router=express.Router()

router.get("/" , getProd)
router.get("/:id" , getProdById)
router.delete("/:id" , deleteProdById)
router.post("/" , postProd)

module.exports= router;