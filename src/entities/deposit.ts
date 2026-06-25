// modelo de deposito que vai aparecer na table em baixo no profile
export default class deposit {
  payer: string;
  payee: string;
  amount: number;
  description: string;
  date: string;
  constructor() {
    this.payer = "";
    this.payee = "";
    this.amount = 0;
    this.description = "";
    this.date = "";
  }
}
