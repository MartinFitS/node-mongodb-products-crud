import {Router} from "express";

import {
    renderProducts, 
    createProduct,
    renderProductEdit, 
    editProduct, 
    deleteProduct
} from "../controllers/products.controllers"

const router = Router();

router.get("/",renderProducts);

router.post("/products/add", createProduct);

router.get("/products/:id/edit", renderProductEdit);

router.post("/products/:id/edit", editProduct)

router.get("/products/:id/delete", deleteProduct)

export default router;