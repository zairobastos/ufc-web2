interface produto {
  id: number;
  dados: Array<string>;
  nome: Array<string>;
}

const listaProdutos: produto[] = [];

export const addProduto = (p: produto) => {
  listaProdutos.push(p);
};

export const removeProduto = (posicao: number) => {
  listaProdutos.splice(posicao, 1);
};

export const getProduto = (): produto[] => {
  return listaProdutos;
};
