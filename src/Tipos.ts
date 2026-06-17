export interface User {
  nome: string;
  iniciais: string;
  contaInfo: string;
}

export type RootStackParamList = {
  Login: undefined;
  Home: { user: User };
};