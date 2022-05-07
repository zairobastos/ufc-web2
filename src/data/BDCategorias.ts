interface categorias {
  id: number;
  nome: string;
  personalizado: Array<string>;
}

const BDCategoria: categorias[] = [];

export const removeCategoria = (posicao: number) => {
  BDCategoria.splice(posicao, 1);
};

export const addCategoria = (categoria: categorias) => {
  BDCategoria.push(categoria);
};

export const getCategoria = () => {
  return BDCategoria;
};
