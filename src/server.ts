import express from "express";

import mainRoutes from "./routes/index";
import categoriaRoutes from "./routes/categoria";
import produtoRoutes from "./routes/produto";

import dotenv from "dotenv";
dotenv.config();

var path = require("path");
var ejs = require("ejs");

const server = express();

server.use(express.urlencoded({ extended: true })); //habilita o uso do post dentro das rotas

server.use(mainRoutes);
server.use(categoriaRoutes);
server.use(produtoRoutes);

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.listen(process.env.PORT);
