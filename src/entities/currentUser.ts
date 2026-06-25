
//usuario atual usado no /profile, as informa;óes desse dto s[o sáo buscadsas no backend se tiver as credenciais corretas,
// os dados pessoais e etc, vai ter outra classe generica de usuario com apenas o
// nome para mostrar contas de outras pessoas

export default class currentUser {
  name: string;
  amount: number;
  entryDate: string;
  constructor() {
    this.name = '';
    this.amount = 0;
    this.entryDate = '';
  }
}
