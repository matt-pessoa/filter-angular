export interface ICard {
  ativo: boolean;
  authorities: string[];
  modalidade: string;
  restricoesVestibular: number;
}

export interface IVestibular {
  id: number;
  nome: string;
}

export interface ICardVestibular {
  ativo: boolean | undefined;
  authorities: string[] | undefined;
  modalidade: string | undefined;
  vestibular: string | undefined;
}
