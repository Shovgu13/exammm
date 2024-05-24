const express = require("express")
const controller = require("../controllers/controller.js") // new
const router = express.Router()


router.get("/product",controller.allProduct)
router.get("/product/:id",controller.allProductById)
router.post("/product",controller.PostProduct)
router.patch("/product/:id",controller.PatchProduct)
router.delete("/product/:id",controller.deleteProduct)


module.exports = router