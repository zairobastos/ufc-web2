import { Request, Response } from "express";

import { addProduto, getProduto, removeProduto } from "../data/BDProdutos";
import { getCategoria } from "../data/BDCategorias";

const p = getProduto();
const categoria = getCategoria();

export const Produto = (req: Request, res: Response) => {
  res.render("produtos", { p });
};

export const Produtos = (req: Request, res: Response) => {
  let dados: Array<string> = [];
  let nome: Array<string> = [];
  for (const key in req.query) {
    dados.push(req.query[key] as string);
    nome.push(key);
  }
  addProduto({
    id: p.length == 0 ? 0 : p[p.length - 1].id + 1,
    dados: dados,
    nome: nome,
  });
  console.log(p);
  res.redirect("/produto");
};

export const ProdutoCadastrar = (req: Request, res: Response) => {
  res.render("produto-cadastrar", {
    categoria,
    data: JSON.stringify(categoria),
  });
};

export const ProdutoEditar = (req: Request, res: Response) => {
  res.render("produto-editar", { posicao: req.query.id, p, c: categoria });
};

export const ProdutoEditarPost = (req: Request, res: Response) => {
  let i = parseInt(req.body.pos);
  p[i].dados[0] = req.body.nome;
  p[i].dados[1] = req.body.preco;
  p[i].dados[2] = req.body.categoria;
  res.redirect("/produto");
};

export const ProdutoDeletar = (req: Request, res: Response) => {
  let posicao = parseInt(req.query.excluir as string);
  p.forEach(function (el, i: number) {
    if (el.id == posicao) {
      removeProduto(i);
    }
  });
  res.redirect("/produto");
};
