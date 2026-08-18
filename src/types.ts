export type Categoria = 'Alimento' | 'Transporte' | 'Lazer' | 'Saúde' | 'Outros';

export type Despesa = {
  id: string;
  titulo: string;
  valor: number;
  categoria: Categoria;
};
