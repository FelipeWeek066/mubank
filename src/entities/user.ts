// modelo de deposito que vai aparecer na table em baixo no profile
export default class deposit {
  name: string;
  amount: number;
  entryDate: string;
  constructor() {
    this.name = "";
    this.amount = 0;
    this.entryDate = "";
  }
}
