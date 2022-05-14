const express = require("express");

const HomeController = require("../controllers/home");
const ProductController = require("../controllers/product")

const routes = express.Router();

routes.get("/products", ProductController.index);
routes.post("/products", ProductController.store);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);
routes.get("/:name?", HomeController.welcome);
module.exports = routes;