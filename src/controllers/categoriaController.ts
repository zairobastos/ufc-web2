import { Response, Request } from "express";
import {
  addCategoria,
  getCategoria,
  removeCategoria,
} from "../data/BDCategorias";

const vetor = getCategoria();

export const Categoria = (req: Request, res: Response) => {
  res.render("categoria", { categoria: vetor });
};

export const CategoriaSalvar = (req: Request, res: Response) => {
  addCategoria({
    id: vetor.length == 0 ? 0 : vetor[vetor.length - 1].id + 1,
    nome: req.body.nome,
    personalizado: req.body.personalizado.split(","),
  });
  res.redirect("/categorias");
};

export const CategoriaDeletar = (req: Request, res: Response) => {
  let posicao = parseInt(req.query.excluir as string);
  vetor.forEach(function (el, i: number) {
    if (el.id == posicao) {
      removeCategoria(i);
    }
  });
  res.redirect("/categorias");
};
