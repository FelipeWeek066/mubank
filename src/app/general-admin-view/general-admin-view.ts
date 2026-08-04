import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Data } from '../data';
import deposit from '../../entities/deposit';
import currentUser from '../../entities/currentUser';

@Component({
  selector: 'app-general-admin-view',
  imports: [],
  templateUrl: './general-admin-view.html',
  styleUrl: './general-admin-view.css',
})
export class GeneralAdminView {
  private data: Data = inject(Data);

  usersSignal: WritableSignal<currentUser[]> = signal<currentUser[]>([]);

  ngOnInit() {
    this.data.getAllUsers().subscribe({
      next: (response: currentUser[]) => {
        this.usersSignal.set(response);
      },
      error: (error: any) => console.log(error),
    });
  }

  totalInBank(): number{
    let temp = 0;
    for (let i = 0; i < this.usersSignal().length; i++) {
      temp += this.usersSignal()[i].amount;
    }
    return temp;
  }
}
