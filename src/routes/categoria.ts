import { Router } from "express";
import * as categoriaController from "../controllers/categoriaController";

const rota = Router();

rota.get("/categorias", categoriaController.Categoria);

rota.post("/categoria-salvar", categoriaController.CategoriaSalvar);

rota.get("/categoria-deletar", categoriaController.CategoriaDeletar);

export default rota;
