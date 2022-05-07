import { Router } from "express";
import * as produtoController from "../controllers/produtoController";
const rotas = Router();

rotas.get("/produto", produtoController.Produto);

rotas.get("/produtos", produtoController.Produtos);

rotas.get("/produto-cadastrar", produtoController.ProdutoCadastrar);

rotas.get("/produto-editar", produtoController.ProdutoEditar);

rotas.post("/produto-editar", produtoController.ProdutoEditarPost);

rotas.get("/produto-deletar", produtoController.ProdutoDeletar);

export default rotas;
