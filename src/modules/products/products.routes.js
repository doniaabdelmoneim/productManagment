import { Router } from "express";
import * as PC from "./product.controller.js";

const router = Router();
router.post("/",PC.addProduct)
router.get("/",PC.getProducts)

router.put("/",PC.updateProduct)
router.delete("/",PC.deleteProduct)


export default router