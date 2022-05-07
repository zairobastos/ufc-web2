const listaProdutos: Array<Object> = [];

export const addProduto = (p: number) => {
  listaProdutos.push(p);
};

export const removeProduto = (posicao: number) => {
  listaProdutos.splice(posicao, 1);
};

export const listaDeProdutos = () => {
  return listaProdutos;
};
