type Arma = {
  nome: string;
  gittata: string;
  danni: number;
  rateo: number;
  attacchi: number;
  extra?: string;
}

type Tattica = {
  nome: string;
  min: number;
}

type Equip = {
  nome: string;
  amount: number;
  max: number;
}

export interface Character {
  nome: string;
  resistenza: number;
  riflessi: number;
  furtivita: number;
  precisione: number;
  sensi: number;
  astuzia: number;
  memoria: number;
  tech: number;
  vitalita: number;
  vitalitaMax: number;
  armatura: number;
  velocita: number;
  ferito: boolean;
  status: string;
  armi: Arma[] | null;
  tattiche: Tattica[] | null;
  equip: Equip[] | null;
}
